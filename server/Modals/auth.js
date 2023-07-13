import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
},{timestamps:true});


export default mongoose.model("auth",authSchema)