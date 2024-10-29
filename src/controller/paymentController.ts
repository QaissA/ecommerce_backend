import { Request, Response } from "express";
import {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
} from "../services/paymentService";

// Get all payments
export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await getAllPayments();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve payments", error });
  }
};

// Get a single payment by ID
export const getOnePayment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const payment = await getPaymentById(id);
    if (payment) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: "Payment not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve payment", error });
  }
};

// Create a new payment
export const addPayment = async (req: Request, res: Response) => {
  try {
    const { orderId, paymentMethod, status, amount } = req.body;
    const payment = await createPayment({ orderId, paymentMethod, status, amount });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create payment", error });
  }
};

// Update an existing payment
export const modifyPayment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { paymentMethod, status, amount } = req.body;
    const updatedPayment = await updatePayment(id, { paymentMethod, status, amount });
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ message: "Failed to update payment", error });
  }
};

// Delete a payment
export const removePayment = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deletePayment(id);
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete payment", error });
  }
};
