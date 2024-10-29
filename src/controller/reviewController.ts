import { Request, Response } from "express";
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from "../services/reviewService";

// Get all reviews
export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await getAllReviews();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve reviews", error });
  }
};

// Get a single review by ID
export const getOneReview = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const review = await getReviewById(id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve review", error });
  }
};

// Create a new review
export const addReview = async (req: Request, res: Response) => {
  try {
    const { userId, productId, rating, comment } = req.body;
    const review = await createReview({ userId, productId, rating, comment });
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Failed to create review", error });
  }
};

// Update an existing review
export const modifyReview = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { rating, comment } = req.body;
    const updatedReview = await updateReview(id, { rating, comment });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: "Failed to update review", error });
  }
};

// Delete a review
export const removeReview = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteReview(id);
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
};
