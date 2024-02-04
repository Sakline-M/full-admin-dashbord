import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";
import mongoDBConnect from "./config/db.js";

import salesRoutes from "./routes/sales.js";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

/* DATA IMPORTS */
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* ENVIROMENT VARIABLE */
const PORT = process.env.PORT || 9090;

/* APP LISTEN */
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgGreen.black);

  /* ONLY ADD DATA ONE TIME */
  // OverallStat.insertMany(dataOverallStat);
  // Product.insertMany(dataProduct);
  // ProductStat.insertMany(dataProductStat);
  // Transaction.insertMany(dataTransaction);
  // User.insertMany(dataUser);

  mongoDBConnect();
});
