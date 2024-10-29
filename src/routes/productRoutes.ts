import {
  addProduct,
  getProducts,
  getOneProduct,
  modifyPoduct,
  removeProduct,
} from "../controller/productController";
import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const productRouter = express.Router();

//ROUTES FOR PRODUCT CONTROLLER
productRouter.post("/", addProduct);
productRouter.get("/", getProducts);
productRouter.get("/:id", getOneProduct);
productRouter.put("/:id", modifyPoduct);
productRouter.delete("/:id", removeProduct);

export default productRouter;
