import { model, Schema, Types } from 'mongoose';

export interface Order {
  user: Types.ObjectId;
  items: [
    {
      product: Types.ObjectId;
      quantity: number;
      price: number;
    },
  ];
  createdAt: Date;
  updatedAt: Date;
}

export const OrderSchema = new Schema<Order>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  createdAt: { type: 'Date', default: Date.now },
  updatedAt: { type: 'Date', default: Date.now },
});

export const OrderModel = model<Order>('Order', OrderSchema);
