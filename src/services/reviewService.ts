import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all reviews
export const getAllReviews = async () => {
  return await prisma.review.findMany({
    include: {
      user: true,
      product: true,
    },
  });
};

// Get a review by its ID
export const getReviewById = async (id: number) => {
  return await prisma.review.findUnique({
    where: { id },
    include: {
      user: true,
      product: true,
    },
  });
};

// Create a new review
export const createReview = async (data: {
  userId: number;
  productId: number;
  rating: number;
  comment?: string;
}) => {
  return await prisma.review.create({
    data: {
      userId: data.userId,
      productId: data.productId,
      rating: data.rating,
      comment: data.comment,
    },
  });
};

// Update an existing review
export const updateReview = async (
  id: number,
  data: {
    rating?: number;
    comment?: string;
  }
) => {
  return await prisma.review.update({
    where: { id },
    data: {
      rating: data.rating,
      comment: data.comment,
    },
  });
};

// Delete a review by its ID
export const deleteReview = async (id: number) => {
  return await prisma.review.delete({
    where: { id },
  });
};
