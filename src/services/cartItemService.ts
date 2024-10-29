import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all items in a cart
export const getItemsByCartId = async (cartId: number) => {
  return await prisma.cartItem.findMany({
    where: { cartId },
    include: {
      product: true,
    },
  });
};

// Add a new item to a cart
export const addItemToCart = async (data: {
  cartId: number;
  productId: number;
  quantity: number;
}) => {
  return await prisma.cartItem.create({
    data: {
      cartId: data.cartId,
      productId: data.productId,
      quantity: data.quantity,
    },
  });
};

// Update the quantity of an existing item in the cart
export const updateCartItemQuantity = async (id: number, quantity: number) => {
  return await prisma.cartItem.update({
    where: { id },
    data: {
      quantity,
    },
  });
};

// Remove an item from the cart
export const removeCartItem = async (id: number) => {
  return await prisma.cartItem.delete({
    where: { id },
  });
};
