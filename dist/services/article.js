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
exports.getArticle = exports.getArticles = exports.deleteArticle = exports.updateArticle = exports.createArticle = void 0;
const article_1 = __importDefault(require("../models/article"));
const category_1 = __importDefault(require("../models/category"));
const createArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield article_1.default.create(data);
    const category = yield category_1.default.findOne({ _id: data.category });
    if (category) {
        category.article.push(response._id);
        yield category.save();
    }
    else {
        console.log("Categoria no encontrada");
    }
    return response;
});
exports.createArticle = createArticle;
const getArticles = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield article_1.default.find();
    return response;
});
exports.getArticles = getArticles;
const getArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield article_1.default.findOne({ _id: id });
    return response;
});
exports.getArticle = getArticle;
const updateArticle = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield article_1.default.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return response;
});
exports.updateArticle = updateArticle;
const deleteArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield article_1.default.findByIdAndDelete(id);
    return response || null;
});
exports.deleteArticle = deleteArticle;
