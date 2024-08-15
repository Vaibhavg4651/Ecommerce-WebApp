import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    name:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String,required:true},
})

const Product= mongoose.model("Users",UserSchema);
export default Product;