import express from "express";
import {
  registerUser,
  removeUser,
  ModifyUser,
  getUser,
  getUsers,
} from "./controller/userController";
import { authencateJWT } from "./middleware/authMidleware";
import { login, signin } from "./controller/authController";

const router = express.Router();
console.log("Route loaded");

router.post("/users", registerUser);

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.put("/users/:id", ModifyUser);

router.delete("/users/:id", removeUser);

//routes from auth
router.post("/signin", signin);
router.post("/login", login);


export default router;
