"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: [
        {
            type: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            order: {
                type: Number,
                required: true,
            },
            editing: Boolean,
        },
    ],
    tag: [{ type: String, required: true }],
    image: {
        secure_url: String,
        public_id: String,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
});
const ArticleModel = (0, mongoose_1.model)("article", ArticleSchema);
exports.default = ArticleModel;
