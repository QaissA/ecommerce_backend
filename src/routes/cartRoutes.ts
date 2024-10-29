import {
  getCarts,
  getOneCart,
  addCart,
  modifyCart,
  removeCart,
} from "../controller/cartController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const cartRouter = express.Router();

//ROUTES FOR CART CONTROLLER
cartRouter.get("/", getCarts);
cartRouter.get("/:id", getOneCart);
cartRouter.post("/", addCart);
cartRouter.put("/:id", modifyCart);
cartRouter.delete("/:id", removeCart);

export default cartRouter;
