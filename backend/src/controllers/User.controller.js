import { User } from "../models/User.model.js";
import { UserValidation } from "../validation/UserValidation.js";

const registerRoute=async(req,res)=>{
// user enter the details ...
// validation using zod...
// check user is existed or not...
// if not then register in database..
try {
    // console.log("HI THRE");
    const{userName,name,password,year,sem,clg,email} = req.body;
    const userData = {userName,name,password,year,sem,clg,email}
    const validateUserData = UserValidation(userData);
    console.log(validateUserData);
    if(!validateUserData.success){
       return  res.status(500).send({msg:"Error in validation"})
    }
    // checking if user is existed or not...
     const resFromDb =  await User.findOne({userName})
    //  console.log(resFromDb);
     if(resFromDb)
     {
        return res.status(500).send({msg:"User is already in database.."})

     }
       const data=await User.create({userName,name,email,password,sem,clg,year});
       if(!data)
       {
        return res.status(500).send({msg:"Error in saving the data in database"})

       }
       return res.status(200).send({msg:"User is saved successfully"})


} catch (error) {
    console.log(error);
}
}
export { registerRoute };

