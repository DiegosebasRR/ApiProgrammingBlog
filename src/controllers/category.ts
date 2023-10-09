import { Response, Request } from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../services/category";

const getCategoriesCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCategories();
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const postCategoryCtrl = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await createCategory(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getCategoryCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCategory(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateCategoryCtrl = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const response = await updateCategory(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteCategoryCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteCategory(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postCategoryCtrl,
  getCategoriesCtrl,
  getCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
};
