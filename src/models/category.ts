import { Schema, model } from "mongoose";
import { Category } from "../interfaces/category.interface";

const CategorySchema = new Schema<Category>({
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  tag: { type: "string", required: true },
  image: {
    secure_url: String,
    public_id: String,
  },
  article: [{ type: Schema.Types.ObjectId, ref: "article", required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

CategorySchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});
const CategoryModel = model("category", CategorySchema);

export default CategoryModel;
