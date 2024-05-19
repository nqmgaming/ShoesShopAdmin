import {model, Schema, Types} from 'mongoose';

export interface Cart {
    user: Types.ObjectId;
    items: {
        product: Types.ObjectId;
        quantity: number;
        size: string;
        price: number;
        category: string;
        productName: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

export const CartSchema = new Schema<Cart>({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    items: {
        product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
        quantity: {
            type: Number, required: true,
            min: [1, 'Quantity must be at least 1'],
            max: [100, 'Quantity must be less than or equal to 100']
        },
        size: {
            type: String, required: true,
            minlength: [1, 'Size must be at least 1 character'],
            maxlength: [50, 'Size must be less than or equal to 50 characters']
        },
        price: {
            type: Number, required: true,
            min: [0, 'Price must be at least 0']
        },
    },

    createdAt: {type: 'Date', default: Date.now},
    updatedAt: {type: 'Date', default: Date.now},
});

export const CartModel = model<Cart>('Cart', CartSchema);
