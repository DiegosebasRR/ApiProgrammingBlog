import { Router } from "express";
import {
  postCategoryCtrl,
  getCategoriesCtrl,
  getCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
  getCategoryByTitleCtrl,
} from "../controllers/category";

const router = Router();

router.get("/", getCategoriesCtrl);
router.get("/:id", getCategoryCtrl);
router.post("/", postCategoryCtrl);
router.put("/:id", updateCategoryCtrl);
router.delete("/:id", deleteCategoryCtrl);
//title
router.get("/title/:title", getCategoryByTitleCtrl);

export { router };
