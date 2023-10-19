import CategoryModel from "../models/category";
import { Category } from "../interfaces/category.interface";

const createCategory = async (data: Category): Promise<Category> => {
  const response = await CategoryModel.create(data);
  return response;
};

const getCategories = async (): Promise<Category[]> => {
  const response = await CategoryModel.find().populate("article");
  return response;
};

const getCategory = async (id: string): Promise<Category | null> => {
  const response = await CategoryModel.findOne({ _id: id }).populate("article");
  return response;
};

const getCategoryByTitle = async (title: string): Promise<Category | null> => {
  const response = await CategoryModel.findOne({ title: title }).populate(
    "article"
  );
  return response;
};

const updateCategory = async (
  id: string,
  data: Category
): Promise<Category | null> => {
  const response = await CategoryModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteCategory = async (id: string): Promise<Category | null> => {
  const response = await CategoryModel.findByIdAndDelete(id);
  return response || null;
};

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
  getCategoryByTitle,
};
