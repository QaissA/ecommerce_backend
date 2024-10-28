import { createUser, loginUser, verifyToken } from "../services/authService";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const signin = async (req: Request, res: Response) => {
  try {
    const userAdded = await createUser(req.body);
    res.status(201).json(userAdded);
  } catch (error) {
    res.status(500).json({ error: "Error creating user", details: error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const loginStatus = await loginUser(email, password);
    console.log("loginStatus",loginStatus);
    res.status(200).json(loginStatus);
  } catch (error) {
    res.status(500).json({ error: "Authentification failed", details: error });
  }
};

export const getToken = async (req : Request, res : Response) => {
  try {
    const { token } = req.body
    verifyToken(token);
  } catch (error) {
    res.status(500).json({error : "verfiction failed", details : error});
  }
}
