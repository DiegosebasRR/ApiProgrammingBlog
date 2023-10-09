import { Router } from "express";
import {
  postArticleCtrl,
  getArticlesCtrl,
  getArticleCtrl,
  updateArticleCtrl,
  deleteArticleCtrl,
} from "../controllers/article";

const router = Router();

router.get("/", getArticlesCtrl);
router.get("/:id", getArticleCtrl);
router.post("/", postArticleCtrl);
router.put("/:id", updateArticleCtrl);
router.delete("/:id", deleteArticleCtrl);

export { router };
