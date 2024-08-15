import express from "express";
import connectDB from "./db.js";
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.json()); //stores in req.body

connectDB();

app.get("/",(req,res)=>{
    res.status(200).send("welcome");
});

const PORT= 3000;
app.listen(PORT,(err)=>{
    if(err){
        console.log('server crash',err);
    }
    else{
        console.log("server is running");
    }
})