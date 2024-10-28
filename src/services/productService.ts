import { PrismaClient } from "@prisma/client";

interface Product {
  name: string;
  description?: string;
  price: number;
  stockQuantity: number;
  categoryId: number;
  images?: { url: string }[];
}

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  return await prisma.product.findMany();
};

export const createProduct = async (data: Product) => {
  return await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      stockQuantity: data.stockQuantity,
      categoryId: data.categoryId,
      images: {
        create: data.images?.map((image) => ({ url: image.url })) || [],
      },
    },
  });
};

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: {
      id,
    },
  });
};

export const updateProduct = async (id: number, data: Product) => {
  return await prisma.product.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      stockQuantity: data.stockQuantity,
      categoryId: data.categoryId,
      images: {
        create: data.images?.map((image) => ({ url: image.url })) || [],
      },
    },
  });
};

export const deleteProduct = async (id: number) => {
  return await prisma.product.delete({
    where: { id },
  });
};
