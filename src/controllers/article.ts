import { Response, Request } from "express";
import {
  getArticle,
  createArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from "../services/article";

const getArticlesCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getArticles();
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};
const postArticleCtrl = async (req: Request, res: Response) => {
  try {
    const { body } = req;
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
const updateArticleCtrl = async (req: Request, res: Response) => {
  try {
    const { params, body } = req;
    const { id } = params;
    const response = await updateArticle(id, body);
    res.send(response);
  } catch (e) {
    console.log(e);
  }
};
const deleteArticleCtrl = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
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
