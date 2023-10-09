"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    tag: { type: "string", required: true },
    image: {
        secure_url: String,
        public_id: String,
    },
    article: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "article", required: true }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});
const CategoryModel = (0, mongoose_1.model)("category", CategorySchema);
exports.default = CategoryModel;
