import mongoose from "mongoose";
const pdfSchema = mongoose.Schema({
    pdfName:{
        type:String,
        required:true,
    },
    cloudinaryId:{
        type:String,
        required:true,
    },
    cloudinaryUrl:{
        type :String,
        required : true,
    }
},{timestamps:true})

export const Pdf = mongoose.model("Pdf",pdfSchema);