import { model, Schema } from 'mongoose';

export interface User {
  image: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserSchema = new Schema<User>({
  image: { type: 'String' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UserModel = model<User>('User', UserSchema);


