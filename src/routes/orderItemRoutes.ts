import {
  getOrderItems,
  getOrderItemsForOrder,
  getOrderItemsForProduct,
  addOrderItem,
  modifyOrderItem,
  removeOrderItem,
} from "../controller/orderItemController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const orderItemRouter = express.Router();

//ROUTES FOR ORDER ITEM CONTROLLER
orderItemRouter.get("/", getOrderItems);
orderItemRouter.get("/order/:orderId", getOrderItemsForOrder);
orderItemRouter.get("/product/:productId", getOrderItemsForProduct);
orderItemRouter.post("/", addOrderItem);
orderItemRouter.put("/order/:orderId/product/:productId", modifyOrderItem);
orderItemRouter.delete("/order/:orderId/product/:productId", removeOrderItem);

export default orderItemRouter;
