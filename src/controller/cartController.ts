import { Request, Response } from "express";
import {
  getAllCarts,
  getCartById,
  createCart,
  updateCart,
  deleteCart,
} from "../services/cartService";

// Get all carts
export const getCarts = async (req: Request, res: Response) => {
  try {
    const carts = await getAllCarts();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve carts", error });
  }
};

// Get a single cart by ID
export const getOneCart = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const cart = await getCartById(id);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cart", error });
  }
};

// Create a new cart
export const addCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const cart = await createCart(userId);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to create cart", error });
  }
};

// Update an existing cart
export const modifyCart = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { items } = req.body;
    const updatedCart = await updateCart(id, { items });
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Failed to update cart", error });
  }
};

// Delete a cart
export const removeCart = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteCart(id);
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete cart", error });
  }
};
