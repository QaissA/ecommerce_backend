import { Request, Response } from "express";
import {
  getItemsByCartId,
  addItemToCart,
  updateCartItemQuantity,
  removeCartItem,
} from "../services/cartItemService";

// Get all items in a cart
export const getCartItems = async (req: Request, res: Response) => {
  try {
    const cartId = parseInt(req.params.cartId);
    const items = await getItemsByCartId(cartId);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cart items", error });
  }
};

// Add a new item to a cart
export const addCartItem = async (req: Request, res: Response) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const item = await addItemToCart({ cartId, productId, quantity });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to add item to cart", error });
  }
};

// Update the quantity of an item in the cart
export const updateCartItem = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { quantity } = req.body;
    const updatedItem = await updateCartItemQuantity(id, quantity);
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Failed to update cart item", error });
  }
};

// Remove an item from the cart
export const removeCartItemFromCart = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await removeCartItem(id);
    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove cart item", error });
  }
};
