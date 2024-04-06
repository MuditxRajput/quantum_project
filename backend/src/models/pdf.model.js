import mongoose from "mongoose";
const pdfSchema = mongoose.Schema({
    pdfName:{
        type:String,
        required:true,
    },
    pdfSem:{
        type:String,
        required :true,
    },
    pdfYear:{
        type: String,
        required : true,
    },
    pdfLink:{
        type:String,
        required:true,
    },
    // coverImage :{
    //     type : String,
    //     required : true,
    // }
},{timestamps:true})

export const Pdf = mongoose.model("Pdf",pdfSchema);