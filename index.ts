import express from "express";
import AdminJS, {
  AdminJSOptions,
  ComponentLoader,
  ResourceOptions,
} from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/mongoose";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import {
  CartModel,
  CategoryModel,
  FavoriteModel,
  OrderModel,
  ProductModel,
  SizeModel,
  UserModel,
} from "./sources/mongoose/models";

dotenv.config();
// AdminJS.registerAdapter({Database: MongooseDatabase, Resource: MongooseResource});
const PORT = process.env.PORT || 3000;

// We'll need to register the mongoose Adapter
AdminJS.registerAdapter({
  Database,
  Resource,
});

const componentLoader = new ComponentLoader();
const Components = {
  Dashboard: componentLoader.add("Dashboard", "./components/dashboard"),
};

const start = async (): Promise<void> => {
  const app = express();

  // This facilitates the connection to the mongo database
  await mongoose.connect(`${process.env.MONGO_URI}`);

  // We will need to create an instance of AdminJS with a basic resource
  const admin = new AdminJS({
    resources: [
      UserModel,
      ProductModel,
      CategoryModel,
      CartModel,
      OrderModel,
      FavoriteModel,
      SizeModel,
    ],
    branding: {
      companyName: "Shoes Shop",
      theme: {
        colors: { primary100: "#4D70EB" },
      },
      logo: "",
      withMadeWithLove: false,
    },
    componentLoader: componentLoader,
    dashboard: {
      component: Components.Dashboard,
    },
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);

  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(
      `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
    );
  });
};

start();
