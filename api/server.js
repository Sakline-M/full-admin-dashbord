import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import cors from "cors"
import producttCategory from "./routes/productCategory.js"
import mongoDBConnect from "./config/db.js"

//init express 
const app = express();
dotenv.config();

//middleware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//set static
app.use(express.static("api/public"));


//routes
app.use("/api/v1/product", producttCategory);


//env variable
const PORT = process.env.PORT || 9090;

//listen
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`.bgGreen.black);
    mongoDBConnect();
})