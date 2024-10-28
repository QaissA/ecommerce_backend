import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategories = async () => {
  return await prisma.category.findMany({
    include: {
      subCategories: true,
      products: true,
    },
  });
};

export const getCategoryById = async (id: number) => {
  return await prisma.category.findUnique({
    where: { id },
    include: {
      subCategories: true,
      products: true,
    },
  });
};

export const createCategory = async (data: {
  name: string;
  parentCategoryId: number;
}) => {
  return await prisma.category.create({
    data: {
      name: data.name,
      parentCategoryId: data.parentCategoryId,
    },
  });
};

export const updateCategory = async (
  id: number,
  data: {
    name: string;
    parentCategoryId: number;
  }
) => {
  return await prisma.category.update({
    where: { id },
    data: {
      name: data.name,
      parentCategoryId: data.parentCategoryId,
    },
  });
};

export const deleteCategory = async (id: number) => {
  return await prisma.category.delete({
    where: { id },
  });
};
