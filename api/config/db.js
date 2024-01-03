import mongoose from "mongoose";


//create mongpdb connetion
const mongoDBConnect = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected Successful`.bgBlue.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
}


//export 
export default mongoDBConnect