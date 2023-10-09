import ArticleModel from "../models/article";
import { Article } from "../interfaces/article.interface";
import CategoryModel from "../models/category";

const createArticle = async (data: Article): Promise<Article> => {
  const response = await ArticleModel.create(data);
  const category = await CategoryModel.findOne({ _id: data.category });
  if (category) {
    category.article.push(response._id);
    await category.save();
  } else {
    console.log("Categoria no encontrada");
  }
  return response;
};

const getArticles = async (): Promise<Article[]> => {
  const response = await ArticleModel.find();
  return response;
};

const getArticle = async (id: string): Promise<Article | null> => {
  const response = await ArticleModel.findOne({ _id: id });
  return response;
};

const updateArticle = async (
  id: string,
  data: Article
): Promise<Article | null> => {
  const response = await ArticleModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

const deleteArticle = async (id: string): Promise<Article | null> => {
  const response = await ArticleModel.findByIdAndDelete(id);
  return response || null;
};

export { createArticle, updateArticle, deleteArticle, getArticles, getArticle };
