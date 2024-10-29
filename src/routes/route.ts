import express from "express";
import {
  registerUser,
  removeUser,
  ModifyUser,
  getUser,
  getUsers,
} from "../controller/userController";
import {
  addProduct,
  getProducts,
  getOneProduct,
  modifyPoduct,
  removeProduct,
} from "../controller/productController";
import {
  addCategory,
  getCategories,
  getOneCategory,
  modifyCategory,
  removeCategory,
} from "../controller/categoryController";
import { authencateJWT } from "../middleware/authMidleware";
import { login, signin } from "../controller/authController";

const router = express.Router();

//ROUTES FOR USERS CONTROLLER
router.post("/users", registerUser);
router.get("/users", authencateJWT, getUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", ModifyUser);
router.delete("/users/:id", removeUser);

//ROUTES FOR PRODUCT CONTROLLER
router.post("/products", addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getOneProduct);
router.put("/products/:id", modifyPoduct);
router.delete("/products/:id", removeProduct);

//ROUTES FOR CATEGORY CONTROLLER
router.post("/categories", addCategory);
router.get("/categories", getCategories);
router.get("/categories/:id", getOneCategory);
router.put("/categories/:id", modifyCategory);
router.delete("/categories/:id", removeCategory);

//routes from auth
router.post("/signin", signin);
router.post("/login", login);

export default router;
