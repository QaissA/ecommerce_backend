import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET =
  process.env.JWT_SECRET || "E6o4yKSEd7mRyEOalAdJqgmLCTeVwWz1idxdxd0liy4=";

export const authencateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "No token provided or invalid format" });
    return;
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    res.sendStatus(403);
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    next();
  });
};
