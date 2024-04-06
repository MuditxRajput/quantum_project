import { Pdf } from "../models/pdf.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const uploadPdfController =async(req,res)=>{
   // take the details of the pdf like name, sem,year..
   // upload the pdf file also..
   // upload the pdf into localFile Path..
   // upload the file on cloudinary..
   // get the link of uploaded file..
   // store the detail of pdf in db..
    const{pdfName,pdfSem,pdfYear} = req.body;
    // console.log(req);
    const existedPdf = await Pdf.findOne({pdfName:pdfName,pdfYear:pdfYear})
    if(existedPdf)
    {
        return res.status(200).send({msg:"Pdf is already there"})

    }
    // console.log(pdfSem,pdfName,pdfYear);
    const localFile = req.file?.path;

   const resFromCloudinary =  await uploadOnCloudinary(localFile)

//    const fisrtPageImageUrl = await getFirstPage(localFile)
//    const response = resFromCloudinary?.url.replace('.pdf','.jpg')
//    const response = resFromCloudinary?.url
   const pdfLink = req.file.originalname;

//    if(!response)
//    {
//     return res.status(500).send({msg:"Cloudinary url is empty"})
//    }
    //  await Pdf.findOne({pdfName:pdfName,pdfYear:pdfYear})
    const pdfDetails = {
     pdfName:pdfName,
     pdfSem:pdfSem,
     pdfYear:pdfYear,
     pdfLink:pdfLink,
    //  coverImage :fisrtPageImageUrl,
    }
    const resFromDb = await Pdf.create(pdfDetails)
   return res.status(200).send({
    resFromDb,
    msg:"Pdf is saved in db.."
   })

}
const numberOfPdf = async(req,res)=>{
    try {
        const numberOfPdf = await Pdf.find();
        if(numberOfPdf.length===0) return res.status(200).send({msg:"No pdf ",sucess:false})
        
        return res.status(200).send({msg:"Pdf is present",numberOfPdf})
    } catch (error) {
        
    }

}

const singlePdfInfo =async(req,res)=>{
        try {
            const{name} = req.params;
           const response =  await Pdf.findOne({"pdfName":name})
           if(!response) return res.status(300).send({msg:"Pdf is not present..",success : false});

           return res.status(200).send({msg: "Pdf data",success:true,response})
        } catch (error) {
            console.log(error);
        }
}
export { numberOfPdf, singlePdfInfo, uploadPdfController };

