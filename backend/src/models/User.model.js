import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userName:{
        type : String,
        required : true,
        unique:true,
    },
    name:{
        type: String,
        required : true,
    },
    email:{
        type : String,
        required: true,
    },
    password:{
        type:String,
        required : true,
    },
    year:{
        type:String,
        required : true,
    },
    sem:{
        type:String,
        required:true,
    },
    clg:{
        type:String,
        required :true,
    }
},{timestamps:true})

export const User = mongoose.model("User",UserSchema);