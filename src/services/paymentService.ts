import { PrismaClient, PaymentMethod, PaymentStatus } from "@prisma/client";

const prisma = new PrismaClient();

// Get all payments
export const getAllPayments = async () => {
  return await prisma.payment.findMany({
    include: {
      order: true,
    },
  });
};

// Get a payment by its ID
export const getPaymentById = async (id: number) => {
  return await prisma.payment.findUnique({
    where: { id },
    include: {
      order: true,
    },
  });
};

// Create a new payment
export const createPayment = async (data: {
  orderId: number;
  paymentMethod: PaymentMethod;
  status: PaymentStatus;
  amount: number;
}) => {
  return await prisma.payment.create({
    data: {
      orderId: data.orderId,
      paymentMethod: data.paymentMethod,
      status: data.status,
      amount: data.amount,
    },
  });
};

// Update an existing payment
export const updatePayment = async (
  id: number,
  data: {
    paymentMethod?: PaymentMethod;
    status?: PaymentStatus;
    amount?: number;
  }
) => {
  return await prisma.payment.update({
    where: { id },
    data: {
      paymentMethod: data.paymentMethod,
      status: data.status,
      amount: data.amount,
    },
  });
};

// Delete a payment by its ID
export const deletePayment = async (id: number) => {
  return await prisma.payment.delete({
    where: { id },
  });
};
