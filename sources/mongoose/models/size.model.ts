import { model, Schema, Types } from 'mongoose';

export interface Size {
  name: string;
  size: [
    {
      id: number;
      name: string;
    },
  ];
  createdAt: Date;
  updatedAt: Date;
}

export const SizeSchema = new Schema<Size>({
  name: { type: 'String', required: true },
  size: [
    {
      id: { type: 'Number', required: true },
      name: { type: 'String', required: true },
    },
  ],
  createdAt: { type: 'Date', default: Date.now },
  updatedAt: { type: 'Date', default: Date.now },
});

export const SizeModel = model<Size>('Size', SizeSchema);
