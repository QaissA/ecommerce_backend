import express from "express";
import { registerUser, removeUser, ModifyUser, getUser, getUsers } from "./controller/userController";

const router = express.Router();
console.log("Route loaded")

router.post("/users", registerUser);

router.get("/users", getUsers);

router.get("/users/:id", getUser)

router.put("/users/:id", ModifyUser)

router.delete("/users/:id", removeUser)





export default router;