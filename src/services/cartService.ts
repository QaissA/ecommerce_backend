import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all carts
export const getAllCarts = async () => {
  return await prisma.cart.findMany({
    include: {
      user: true,
      items: true,
    },
  });
};

// Get a cart by its ID
export const getCartById = async (id: number) => {
  return await prisma.cart.findUnique({
    where: { id },
    include: {
      user: true,
      items: true,
    },
  });
};

// Create a new cart
export const createCart = async (userId: number) => {
  return await prisma.cart.create({
    data: {
      userId,
    },
  });
};

// Update an existing cart
export const updateCart = async (
  id: number,
  data: {
    items?: {
      connect?: { id: number }[];
      disconnect?: { id: number }[];
    };
  }
) => {
  return await prisma.cart.update({
    where: { id },
    data: {
      items: data.items,
    },
  });
};

// Delete a cart by its ID
export const deleteCart = async (id: number) => {
  return await prisma.cart.delete({
    where: { id },
  });
};
