import {
  addCategory,
  getCategories,
  getOneCategory,
  modifyCategory,
  removeCategory,
} from "../controller/categoryController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const categoryRouter = express.Router();

//ROUTES FOR CATEGORY CONTROLLER
categoryRouter.post("/", addCategory);
categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getOneCategory);
categoryRouter.put("/:id", modifyCategory);
categoryRouter.delete("/:id", removeCategory);

export default categoryRouter;
