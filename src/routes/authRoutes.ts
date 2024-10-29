import { login, signin } from "../controller/authController";

import express from "express";

const authRouter = express.Router();

//routes from auth
authRouter.post("/signin", signin);
authRouter.post("/login", login);

export default authRouter;
