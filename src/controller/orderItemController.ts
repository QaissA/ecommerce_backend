import { Request, Response } from "express";
import {
  getAllOrderItems,
  getOrderItemsByOrderId,
  getOrderItemsByProductId,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../services/orderItemService";

// Get all order items
export const getOrderItems = async (req: Request, res: Response) => {
  try {
    const orderItems = await getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve order items", error });
  }
};

// Get order items by order ID
export const getOrderItemsForOrder = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const orderItems = await getOrderItemsByOrderId(orderId);
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve order items by order ID", error });
  }
};

// Get order items by product ID
export const getOrderItemsForProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    const orderItems = await getOrderItemsByProductId(productId);
    res.status(200).json(orderItems);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve order items by product ID", error });
  }
};

// Create a new order item
export const addOrderItem = async (req: Request, res: Response) => {
  try {
    const { orderId, productId, quantity, unitPrice } = req.body;
    const orderItem = await createOrderItem({ orderId, productId, quantity, unitPrice });
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order item", error });
  }
};

// Update an order item
export const modifyOrderItem = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const productId = parseInt(req.params.productId);
    const { quantity, unitPrice } = req.body;
    const updatedOrderItem = await updateOrderItem(orderId, productId, { quantity, unitPrice });
    res.status(200).json(updatedOrderItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update order item", error });
  }
};

// Delete an order item
export const removeOrderItem = async (req: Request, res: Response) => {
  try {
    const orderId = parseInt(req.params.orderId);
    const productId = parseInt(req.params.productId);
    await deleteOrderItem(orderId, productId);
    res.status(200).json({ message: "Order item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order item", error });
  }
};
