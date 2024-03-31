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
    // console.log(localFile);
   const resFromCloudinary =  await uploadOnCloudinary(localFile)
   const response = resFromCloudinary?.url.replace('.pdf','.jpg')
   if(!response)
   {
    return res.status(500).send({msg:"Cloudinary url is empty"})
   }
    //  await Pdf.findOne({pdfName:pdfName,pdfYear:pdfYear})
    const pdfDetails = {
     pdfName:pdfName,
     pdfSem:pdfSem,
     pdfYear:pdfYear,
     pdfLink:response,
    }
    const resFromDb = await Pdf.create(pdfDetails)
   return res.status(200).send({
    response,
    resFromDb,
    msg:"Pdf is saved in db.."
   })

}
export { uploadPdfController };

