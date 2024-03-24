import { z } from 'zod';

const UserSchema = z.object({
    userName : z.string().min(3).max(20),
    name : z.string(),
    email : z.string().email(),
    password : z.string().min(6),
    year:z.string(),
    sem:z.string(),
    clg :z.string(),
})

const UserValidation=(userData)=>{
    // console.log("vali");
   return UserSchema.safeParse(userData);
    

}
export { UserValidation };
