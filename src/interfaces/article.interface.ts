import { Types } from "mongoose";

export interface Article {
  title: string;
  description: string;
  content: Content[];
  tag: string[];
  category: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  image: any;
}

export interface Content {
  type: string;
  text: string;
  order: number;
  editing: boolean;
}
