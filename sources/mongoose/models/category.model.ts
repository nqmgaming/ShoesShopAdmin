import { model, Schema, Types } from 'mongoose';

export interface Category {
  name: string;
  description: string;
  numberOfProducts: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export const CategorySchema = new Schema<Category>(
  {
    name: { type: 'String', required: true },
    description: { type: 'String', required: true },
    numberOfProducts: [{ type: 'ObjectId', ref: 'Product' }],
    createdAt: { type: 'Date', default: Date.now },
    updatedAt: { type: 'Date', default: Date.now },
  },
  { timestamps: true },
);

export const CategoryModel = model<Category>('Category', CategorySchema);
