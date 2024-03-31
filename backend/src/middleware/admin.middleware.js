import jwt from 'jsonwebtoken';
import { User } from "../models/User.model.js";
const adminVerify=async(req,res,next)=>{
         try {
            const token = req.header("Authorization")?.replace("Bearer ","");
            const decode  = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
            const user = await  User.findById(decode?._id).select({password:0});
            if(!user)
            {
                return res.status(401).send({
                    msg:"Unauthorized : Invalid Token"
                })
            }

            req.user = user;
            next();
         } catch (error) {
            console.log("Token me error->",error);
        return res.status(400).send({
            msg:error
        })
         }
}
const isUserAdmin=async(req,res,next)=>{
    const user = req.user;
    if(user.admin)
    {
            next();
    }
    else{

        return res.status(200).send({
            success:false,
            msg :"User is not admin"
        })
    }
    


}
export { adminVerify, isUserAdmin };

