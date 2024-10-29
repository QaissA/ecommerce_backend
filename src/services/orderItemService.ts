import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all order items with order and product details
export const getAllOrderItems = async () => {
  return await prisma.orderItem.findMany({
    include: {
      order: true,
      product: true,
    },
  });
};

// Get order items by order ID
export const getOrderItemsByOrderId = async (orderId: number) => {
  return await prisma.orderItem.findMany({
    where: { orderId },
    include: {
      product: true,
    },
  });
};

// Get order items by product ID
export const getOrderItemsByProductId = async (productId: number) => {
  return await prisma.orderItem.findMany({
    where: { productId },
    include: {
      order: true,
    },
  });
};

// Add an order item
export const createOrderItem = async (data: {
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
}) => {
  return await prisma.orderItem.create({
    data,
  });
};

// Update an order item's quantity or unit price
export const updateOrderItem = async (
  orderId: number,
  productId: number,
  data: {
    quantity?: number;
    unitPrice?: number;
  }
) => {
  return await prisma.orderItem.update({
    where: { orderId_productId: { orderId, productId } },
    data,
  });
};

// Delete an order item
export const deleteOrderItem = async (orderId: number, productId: number) => {
  return await prisma.orderItem.delete({
    where: { orderId_productId: { orderId, productId } },
  });
};
