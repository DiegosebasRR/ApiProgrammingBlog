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
exports.deleteArticleCtrl = exports.updateArticleCtrl = exports.getArticleCtrl = exports.getArticlesCtrl = exports.postArticleCtrl = void 0;
const article_1 = require("../services/article");
const getArticlesCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, article_1.getArticles)();
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getArticlesCtrl = getArticlesCtrl;
const postArticleCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const response = yield (0, article_1.createArticle)(body);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.postArticleCtrl = postArticleCtrl;
const getArticleCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, article_1.getArticle)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (e) {
        console.log(e);
    }
});
exports.getArticleCtrl = getArticleCtrl;
const updateArticleCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params, body } = req;
        const { id } = params;
        const response = yield (0, article_1.updateArticle)(id, body);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateArticleCtrl = updateArticleCtrl;
const deleteArticleCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = params;
        const response = yield (0, article_1.deleteArticle)(id);
        res.send(response);
    }
    catch (e) {
        console.log(e);
    }
});
exports.deleteArticleCtrl = deleteArticleCtrl;
