import mongoose from "mongoose";

const URL = "mongodb://0.0.0.0:27017/transportation"

export const connect = async() =>{
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log(`database connected on`);
    } catch (error) {
        console.log("error while connecting database",error.message);
    }
}