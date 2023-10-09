import { model, Schema } from "mongoose";
import { Article } from "../interfaces/article.interface";

const ArticleSchema = new Schema<Article>({
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
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const ArticleModel = model("article", ArticleSchema);

export default ArticleModel;
