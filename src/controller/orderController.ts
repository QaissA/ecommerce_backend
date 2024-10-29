import { Request, Response } from "express";
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../services/orderService";

// Get all orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve orders!", details: error });
  }
};

// Get a single order by ID
export const getOneOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const order = await getOrderById(orderId);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Order not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve order!", details: error });
  }
};

// Create a new order
export const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId, status, totalPrice } = req.body;
    const order = await createOrder({ userId, status, totalPrice });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order!", details: error });
  }
};

// Update an existing order
export const modifyOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    const { status, totalPrice } = req.body;
    const updatedOrder = await updateOrder(orderId, { status, totalPrice });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order!", details: error });
  }
};

// Delete an order by ID
export const removeOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.id);
    await deleteOrder(orderId);
    res.status(200).json({ message: "Order deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order!", details: error });
  }
};
