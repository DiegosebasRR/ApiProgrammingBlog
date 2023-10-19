import { Response, Request } from "express";
import {
  getArticle,
  createArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from "../services/article";
import { deleteImage, uploadImage } from "../utils/cloudinary";
import fs from "fs-extra";
const getArticlesCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getArticles();
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const postArticleCtrl = async (req: any, res: Response) => {
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
    const response = await createArticle(body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const getArticleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getArticle(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const updateArticleCtrl = async (req: any, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const responseGet = await getArticle(id);
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
    const response = await updateArticle(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteArticleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseGet = await getArticle(id);
    if (responseGet!.image.public_id) {
      await deleteImage(responseGet!.image.public_id);
    }
    const response = await deleteArticle(id);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};

export {
  postArticleCtrl,
  getArticlesCtrl,
  getArticleCtrl,
  updateArticleCtrl,
  deleteArticleCtrl,
};
