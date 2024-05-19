import {model, Schema, Types} from 'mongoose';

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
    name: {
        type: 'String', required: true,
        minlength: [2, 'Name must be at least 2 characters'],
        maxlength: [50, 'Name must be less than or equal to 50 characters']
    },
    size: [
        {
            id: {
                type: 'Number', required: true,
                min: [1, 'ID must be at least 1']
            },
            name: {
                type: 'String', required: true,
                minlength: [2, 'Name must be at least 2 characters'],
                maxlength: [50, 'Name must be less than or equal to 50 characters']
            },
        },
    ],
    createdAt: {type: 'Date', default: Date.now},
    updatedAt: {type: 'Date', default: Date.now},
});

export const SizeModel = model<Size>('Size', SizeSchema);
