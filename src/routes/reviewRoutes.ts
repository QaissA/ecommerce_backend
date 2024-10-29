import {
  getReviews,
  getOneReview,
  addReview,
  modifyReview,
  removeReview,
} from "../controller/reviewController";

import { authencateJWT } from "../middleware/authMidleware";
import express from "express";

const reviewRouter = express.Router();

//ROUTES FOR REVIEW CONTROLLER
reviewRouter.get("/", getReviews);
reviewRouter.get("/:id", getOneReview);
reviewRouter.post("/", addReview);
reviewRouter.put("/:id", modifyReview);
reviewRouter.delete("/:id", removeReview);

export default reviewRouter;
