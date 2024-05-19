import {model, Schema, Types} from 'mongoose';

export interface Product {
    name: string;
    description: string;
    price: number;
    category: Types.ObjectId;
    imagePreview: string;
    images: [string]
    stock: number;
    rating: number;
    size: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export const ProductSchema = new Schema<Product>({
    name: {
        type: 'String', required: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name must be less than or equal to 50 characters']
    },
    description: {
        type: 'String', required: true,
        minlength: [10, 'Description must be at least 10 characters'],
        maxlength: [500, 'Description must be less than or equal to 500 characters']
    },
    price: {
        type: 'Number', required: true,
        min: [0, 'Price must be at least 0']
    },
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
    imagePreview: {type: 'String', required: true},
    images: [{type: 'String', required: true}],
    stock: {
        type: 'Number', required: true,
        min: [0, 'Stock must be at least 0']
    },
    rating: {
        type: 'Number', required: true,
        min: [0, 'Rating must be at least 0'],
        max: [5, 'Rating must be less than or equal to 5']
    },
    size: {type: Schema.Types.ObjectId, ref: 'Size', required: true},
    createdAt: {type: 'Date', default: Date.now},
    updatedAt: {type: 'Date', default: Date.now},
});

export const ProductModel = model<Product>('Product', ProductSchema);
