import { Router } from "express";
import {
  postCategoryCtrl,
  getCategoriesCtrl,
  getCategoryCtrl,
  updateCategoryCtrl,
  deleteCategoryCtrl,
} from "../controllers/category";

const router = Router();

router.get("/", getCategoriesCtrl);
router.get("/:id", getCategoryCtrl);
router.post("/", postCategoryCtrl);
router.put("/:id", updateCategoryCtrl);
router.delete("/:id", deleteCategoryCtrl);

export { router };
