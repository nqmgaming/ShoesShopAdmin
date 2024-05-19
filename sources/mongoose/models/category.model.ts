import {model, Schema, Types} from 'mongoose';

export interface Category {
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export const CategorySchema = new Schema<Category>(
    {
        name: {
            type: 'String', required: true,
            minlength: [2, 'Name must be at least 2 characters'],
            maxlength: [50, 'Name must be less than or equal to 50 characters']
        },
        createdAt: {type: 'Date', default: Date.now},
        updatedAt: {type: 'Date', default: Date.now},
    },
    {timestamps: true},
);

export const CategoryModel = model<Category>('Category', CategorySchema);
