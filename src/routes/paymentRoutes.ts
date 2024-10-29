import {
  getPayments,
  getOnePayment,
  addPayment,
  modifyPayment,
  removePayment,
} from "../controller/paymentController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const paymentRouter = express.Router();

//ROUTES FOR PAYMENT CONTROLLER
paymentRouter.get("/", getPayments);
paymentRouter.get("/:id", getOnePayment);
paymentRouter.post("/", addPayment);
paymentRouter.put("/:id", modifyPayment);
paymentRouter.delete("/:id", removePayment);

export default paymentRouter;
