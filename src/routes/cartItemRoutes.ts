import {
  getCartItems,
  addCartItem,
  updateCartItem,
  removeCartItemFromCart,
} from "../controller/cartItemController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const cartItemRouter = express.Router();

//ROUTES FOR CART ITEM CONTROLLER
cartItemRouter.get("/:cartId/items", getCartItems);
cartItemRouter.post("/:cartId/items", addCartItem);
cartItemRouter.put("/items/:id", updateCartItem);
cartItemRouter.delete("/items/:id", removeCartItemFromCart);

export default cartItemRouter;
