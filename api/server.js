import express from "express"
import colors from "colors"
import dotenv from "dotenv"



//init express 
const app = express();
dotenv.config();


//env variable
const PORT = process.env.PORT || 9090;

//listen
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`.bgGreen.black);
})