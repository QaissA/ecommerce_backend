import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from 'nodemailer';

const prisma = new PrismaClient({
    log : ["query", "info", "warn", "error"]
});
const saltRounds = 10;
const JWT_SECRET =
  process.env.JWT_SECRET || "E6o4yKSEd7mRyEOalAdJqgmLCTeVwWz1idxdxd0liy4=";

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  role?: Role;
  adress: string;
}) => {
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  const verificationCode = crypto.randomBytes(3).toString("hex").toUpperCase();

  const newUser =  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role || "CUSTOMER",
      adress: data.adress,
      verificationCode,
      isVerified : false,
    },
  });

  await sendVerificationEmail(data.email, verificationCode)
  return newUser;
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found!");
  }
  console.log(password, user.password)
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch)
  if (!isMatch) {
    console.log("here")
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
  console.log(token, user)
  return { user, token };
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};

const sendVerificationEmail = async (email : string, code :string) => {
  const transporter = nodemailer.createTransport({
    service : "Gmail",
    auth : {
      user : "qaissabdelhamid@gmail.com",
      pass : ""
    }
  })

  const mailOptions = {
    from : "qaissabdelhamid@gmail.com",
    to : email,
    subject : "Verify Your Email",
    text : `Your verification code is : ${code}`
  }

  await transporter.sendMail(mailOptions);
}
