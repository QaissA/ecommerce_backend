import { Request, Response } from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/categoryService";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve categories!", details: error });
  }
};

export const getOneCategory = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryById(parseInt(req.params.id));
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "Category not found!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve category!", details: error });
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const { name, parentCategoryId } = req.body;
    const category = await createCategory({ name, parentCategoryId });
    res.status(201).json(category);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add category!", details: error });
  }
};

export const modifyCategory = async (req: Request, res: Response) => {
  try {
    const { name, parentCategoryId } = req.body;
    const updatedCategory = await updateCategory(parseInt(req.params.id), {
      name,
      parentCategoryId,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update category!", details: error });
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    await deleteCategory(parseInt(req.params.id));
    res.status(200).json({ message: "Category deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete category!", details: error });
  }
};
