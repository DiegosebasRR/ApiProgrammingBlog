import { Types } from "mongoose";

export interface Category {
  title: string;
  description: string;
  tag: string;
  article: Array<Types.ObjectId>;
  createdAt: Date;
  updatedAt: Date;
  image: any;
}
