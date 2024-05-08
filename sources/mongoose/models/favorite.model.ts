import { model, Schema, Types } from 'mongoose';

export interface Favorite {
  user: Types.ObjectId;
  product: [Types.ObjectId];
  createdAt: Date;
  updatedAt: Date;
}

export const FavoriteSchema = new Schema<Favorite>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    createdAt: { type: 'Date', default: Date.now },
    updatedAt: { type: 'Date', default: Date.now },
  },
  { timestamps: true },
);

export const FavoriteModel = model<Favorite>('Favorite', FavoriteSchema);
