import { Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../services/productService";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to add Product !", detaisl: error });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to get Products !", detaisl: error });
  }
};

export const getOneProduct = async (req: Request, res: Response) => {
  try {
    const product = await getProductById(parseInt(req.params.id));
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to get Product !", detaisl: error });
  }
};

export const modifyPoduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = await updateProduct(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to update Product !", detaisl: error });
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const deletedProduct = await deleteProduct(parseInt(req.params.id));
    res.status(200).json(deletedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "failed to delete Product !", detaisl: error });
  }
};
