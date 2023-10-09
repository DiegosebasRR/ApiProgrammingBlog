"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const category_1 = require("../controllers/category");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", category_1.getCategoriesCtrl);
router.get("/:id", category_1.getCategoryCtrl);
router.post("/", category_1.postCategoryCtrl);
router.put("/:id", category_1.updateCategoryCtrl);
router.delete("/:id", category_1.deleteCategoryCtrl);
