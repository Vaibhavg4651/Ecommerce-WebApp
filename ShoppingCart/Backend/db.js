import mongoose from "mongoose";
import dontenv from "dotenv";

dontenv.config();

const URL=process.env.MONGO_URL;

const connectDB= async()=>{
    try{
        mongoose.set('strictQuery',false);
        mongoose.connect(URL
            // ,{userNewUrlParser: true,
            // userUnifiedTopology: true}
        ).then(console.log("connected successfully"))
    }
    catch(e){
        console.log(e);
    }
}
export default connectDB;
