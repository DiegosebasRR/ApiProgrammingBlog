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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = exports.getCategories = exports.deleteCategory = exports.updateCategory = exports.createCategory = void 0;
const category_1 = __importDefault(require("../models/category"));
const createCategory = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield category_1.default.create(data);
    return response;
});
exports.createCategory = createCategory;
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield category_1.default.find().populate("article");
    return response;
});
exports.getCategories = getCategories;
const getCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield category_1.default.findOne({ _id: id });
    return response;
});
exports.getCategory = getCategory;
const updateCategory = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield category_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return response;
});
exports.updateCategory = updateCategory;
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield category_1.default.findByIdAndDelete(id);
    return response || null;
});
exports.deleteCategory = deleteCategory;
