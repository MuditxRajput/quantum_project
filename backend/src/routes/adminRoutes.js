import { Router } from "express";
import { numberOfPdf, singlePdfInfo, uploadPdfController } from "../controllers/admin.controller.js";
import { adminVerify, isUserAdmin } from "../middleware/admin.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route('/addPdf').post(adminVerify,upload.single('pdf'),uploadPdfController);
router.route('/numberOfPdf').get(numberOfPdf)
router.route('/singlePdf/:name').get(singlePdfInfo)
router.route('/auth').post(adminVerify,isUserAdmin,(req,res)=>res.status(200).send({sucess:true}));

export default router;
