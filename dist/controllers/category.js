"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryCtrl = exports.updateCategoryCtrl = exports.getCategoryCtrl = exports.getCategoriesCtrl = exports.postCategoryCtrl = void 0;
const category_1 = require("../services/category");
const getCategoriesCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, category_1.getCategories)();
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getCategoriesCtrl = getCategoriesCtrl;
const postCategoryCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const response = yield (0, category_1.createCategory)(body);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.postCategoryCtrl = postCategoryCtrl;
const getCategoryCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, category_1.getCategory)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getCategoryCtrl = getCategoryCtrl;
const updateCategoryCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params, body } = req;
        const { id } = params;
        const response = yield (0, category_1.updateCategory)(id, body);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateCategoryCtrl = updateCategoryCtrl;
const deleteCategoryCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, category_1.deleteCategory)(id);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteCategoryCtrl = deleteCategoryCtrl;
