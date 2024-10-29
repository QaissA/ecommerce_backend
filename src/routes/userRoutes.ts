import {
  registerUser,
  removeUser,
  ModifyUser,
  getUser,
  getUsers,
} from "../controller/userController";
import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const userRouter = express.Router();

//ROUTES FOR USERS CONTROLLER
userRouter.post("/", registerUser);
userRouter.get("/", authencateJWT, getUsers);
userRouter.get("/:id", getUser);
userRouter.put("/:id", ModifyUser);
userRouter.delete("/:id", removeUser);

export default userRouter;
