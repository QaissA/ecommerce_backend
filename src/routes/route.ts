import express from "express";

import userRouter from "./userRoutes";
import productRouter from "./productRoutes";
import categoryRouter from "./categoryRoutes";
import orderRouter from "./orderRoutes";
import orderItemRouter from "./orderItemRoutes";
import paymentRouter from "./paymentRoutes";
import reviewRouter from "./reviewRoutes";
import cartRouter from "./cartRoutes";
import cartItemRouter from "./cartItemRoutes";
import authRouter from "./authRoutes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/category", categoryRouter);
router.use("/orders", orderRouter);
router.use("/order-items", orderItemRouter);
router.use("/payment", paymentRouter);
router.use("/review", reviewRouter);
router.use("/cart", cartRouter);
router.use("/cart", cartRouter);
router.use("/cart-items", cartItemRouter);
router.use("/auth", authRouter);

export default router;
