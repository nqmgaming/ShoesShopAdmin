import {model, Schema} from 'mongoose';

export interface User {
    avatar: {
        url: string;
        publicId: string;
    }
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
    avatar: {
        url: {type: String, required: false},
        publicId: {type: String, required: false},
    },
    email: {
        type: String, required: true, unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    password: {
        type: String, required: true,
        minlength: [6, 'Password must be at least 6 characters'],
    },
    firstName: {
        type: String, required: true,
        minlength: [2, 'First name must be at least 2 characters'],
        maxlength: [50, 'First name must be less than or equal to 50 characters']
    },
    lastName: {
        type: String, required: true,
        minlength: [2, 'Last name must be at least 2 characters'],
        maxlength: [50, 'Last name must be less than or equal to 50 characters']
    },
    birthDate: {type: Date, required: true},
    address: {
        type: String, required: true,
        minlength: [2, 'Address must be at least 2 characters'],
        maxlength: [100, 'Address must be less than or equal to 50 characters']
    },
    phoneNumber: {
        type: String, required: false,
        match: [/^\d{10}$/, 'Please use a valid phone number.'],
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

export const UserModel = model<User>('User', UserSchema);


