import {
  getOrders,
  getOneOrder,
  addOrder,
  modifyOrder,
  removeOrder,
} from "../controller/orderController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const orderRouter = express.Router();

//ROUTES FOR ORDER CONTROLLER
orderRouter.post("/", addOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOneOrder);
orderRouter.put("/:id", modifyOrder);
orderRouter.delete("/:id", removeOrder);

export default orderRouter;
