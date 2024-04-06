import { User } from "../models/User.model.js";
import { UserValidation } from "../validation/UserValidation.js";
import { loginValidaton } from "../validation/loginValidation.js";

const registerRoute=async(req,res)=>{
// user enter the details ...
// validation using zod...
// check user is existed or not...
// if not then register in database
try {
    // console.log("HI THRE");
    const{userName,name,password,year,email,branch,clg} = req.body;
    const userData = {userName,name,password,year,email,branch,clg}
    console.log(userData);
    const validateUserData = UserValidation(userData);
   //  console.log(validateUserData.error.errors.message);
    if(!validateUserData.success){
      // console.log(validateUserData.error.errors[0].message);
       return  res.status(500).json({msg :validateUserData.error.errors[0].message})
    }
    // checking if user is existed or not...
     const resFromDb =  await User.findOne({userName})
    //  console.log(resFromDb);
     if(resFromDb)
     {
        return res.status(500).send({msg:"User is already in database.."})

     }
       const data=await User.create({userName,name,email,password,year,clg});
       if(!data)
       {
        return res.status(500).send({msg:"Error in saving the data in database"})

       }
       return res.status(200).send({msg:"User is saved successfully",success:true})


} catch (error) {
    console.log(error);
    return res.status(500).send({msg:error})
}
}

const loginRoute =async(req,res)=>{
   try {
      // user enter the logins details
      // zod validation
      // check user is present by username..
      // compare the password matched with db pass
      //if password check then make a jwt ...
      
      const{email,password} =  req.body;
      const user = {email,password};
      const validateUserData =  loginValidaton(user);
      if(!validateUserData.success)
      {
         return res.status(500).send({msg: "Error in validation"})
      }
     const existedUser = await User.findOne({email})
     if(!existedUser)
     {
      return res.status(500).send({msg:"User is not present.."})
     }
     const checkPassword = await existedUser.isPasswordCorrect(password)
     if(checkPassword===false)
     {
      return res.status(400).send({msg:"Incorrect Password",success:false})
     }
     const token = existedUser.generateToken();
     if(!token)
     {
      return res.status(500).send({msg:"Error in generating token"})
     }
     return res.status(200).send({
      msg:"User is logged successfully",
      token,
      existedUser,
      success:true,
     })



      
   } catch (error) {
      console.log(error);
   }

}

const forgotPassword=async(req,res)=>{
      try {
         // when user click on forgot password then this api hit...
         // user give username with email ..
         // check username and email is present or not..
         // if not present give the message..
         // if present take the new password...
         // hash the password and update the password using username..
         const{email,password} = req.body;
         console.log(email);
         const user = await User.findOne({email})
         if(!user)
         {
            return res.status(200).send({msg:"Email is not present",success:false})
         }
         // await user.password = password;
         user.password = password,
        await user.save({validateBeforeSave:false});
        return res.status(200).send({msg:"Password is change",success:true})

      } catch (error) {
         console.log(error);
      }
}
const totalStudents =async(req,res)=>{
   try {
      const response = await User.find();
      if(!response) return res.status(300).send({success:false});

      const total = response.length;
      return res.status(200).send({total})
   } catch (error) {
      
   }

}
export { forgotPassword, loginRoute, registerRoute, totalStudents };

