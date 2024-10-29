import { PrismaClient, OrderStatus } from "@prisma/client";

const prisma = new PrismaClient();

// Retrieve all orders with user, order items, and payment details
export const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: true,
      orderItems: true,
      payment: true,
    },
  });
};

// Retrieve a single order by its ID, including user, order items, and payment
export const getOrderById = async (id: number) => {
  return await prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      orderItems: true,
      payment: true,
    },
  });
};

// Create a new order with initial details
export const createOrder = async (data: {
  userId: number;
  status?: OrderStatus;
  totalPrice: number;
}) => {
  return await prisma.order.create({
    data: {
      userId: data.userId,
      status: data.status || OrderStatus.PENDING,
      totalPrice: data.totalPrice,
    },
  });
};

// Update an existing order's status or total price
export const updateOrder = async (
  id: number,
  data: {
    status?: OrderStatus;
    totalPrice?: number;
  }
) => {
  return await prisma.order.update({
    where: { id },
    data: {
      status: data.status,
      totalPrice: data.totalPrice,
    },
  });
};

// Delete an order by its ID
export const deleteOrder = async (id: number) => {
  return await prisma.order.delete({
    where: { id },
  });
};
