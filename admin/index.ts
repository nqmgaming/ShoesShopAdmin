import {Database as MongooseDatabase, Resource as MongooseResource} from '@adminjs/mongoose';
import AdminJS, {AdminJSOptions, ResourceOptions} from 'adminjs';
import {
    CreateCategoryResource, CreateUserResource,
    CreateProductResource,
    CreateCartResource,
    CreateOrderResource,
    FavoriteResource,
    CreateSizeResource,
} from "../sources/mongoose/resources";

AdminJS.registerAdapter({Database: MongooseDatabase, Resource: MongooseResource});

export const menu: Record<string, ResourceOptions['navigation']> = {
    mongoose: {name: 'Database', icon: 'Folder'},
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
    version: {admin: true, app: '2.0.0'},
    rootPath: '/admin',
    assets: {
        styles: ['/custom.css'],
        scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
    },
    branding: {
        companyName: 'Shoes Shop',
        favicon: '/favicon.ico',
        theme: {
            colors: {primary100: '#4D70EB'},
        },
    },
    defaultTheme: 'light',
    resources: [
        // mongoose
        CreateUserResource(),
        CreateProductResource(),
        CreateCategoryResource(),
        CreateCartResource(),
        CreateOrderResource(),
        FavoriteResource(),
        CreateSizeResource(),
    ],
});

