import { Response, Request } from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
  getCategoryByTitle,
} from "../services/category";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";
const getCategoriesCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCategories();
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const postCategoryCtrl = async (req: any, res: Response) => {
  try {
    const { body } = req;
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      body.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
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
const getCategoryByTitleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { title } = params;
    const response = await getCategoryByTitle(title);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateCategoryCtrl = async (req: any, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const responseGet = await getCategory(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      body.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
      await fs.unlink(req.files.image.tempFilePath);
    }
    const response = await updateCategory(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteCategoryCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseGet = await getCategory(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
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
  getCategoryByTitleCtrl,
};
