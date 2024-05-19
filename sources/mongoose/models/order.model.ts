import {model, Schema, Types} from 'mongoose';

export interface Order {
    user: Types.ObjectId;
    products: [
        {
            product: Types.ObjectId;
            quantity: number;
        }
    ],
    address: String,
    phoneNumber: String,
    email: String,
    total: number,
    time: Date,
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

enum OrderStatus {
    Pending = 'Pending',
    Processing = 'Processing',
    Shipped = 'Shipped',
    Delivered = 'Delivered',
    Cancelled = 'Cancelled',
}

export const OrderSchema = new Schema<Order>({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    products: [
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product', required: true},
            quantity: {
                type: Number, required: true,
                min: [1, 'Quantity must be at least 1'],
            },
        }
    ],
    address: {
        type: String, required: true,
        minlength: [2, 'Address must be at least 2 characters'],
        maxlength: [100, 'Address must be less than or equal to 50 characters']
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please use a valid phone number.'],
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    total: {
        type: Number,
        required: true,
        min: [0, 'Total must be at least 0']
    },
    time: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: Object.values(OrderStatus),
        default: OrderStatus.Pending,
    },
    createdAt: {type: 'Date', default: Date.now},
    updatedAt: {type: 'Date', default: Date.now},
});

export const OrderModel = model<Order>('Order', OrderSchema);
