import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
    clg:{
        type:String,
        required :true,
    },
    branch:{
        type:String,
        require:true,
    },
    admin:{
        type:Boolean,
        default:false
    },
    year:{
        type:String,
        required:true,
    }
},{timestamps:true})

// password hashing methods...
UserSchema.pre("save",async function(next)
{
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();

})

UserSchema.methods.isPasswordCorrect = async function(password)
{
         return await bcrypt.compare(password,this.password)
}


UserSchema.methods.generateToken =  function()
{
           return jwt.sign({
                _id:this.id,
                username : this.username
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
            }
            )
}

export const User = mongoose.model("User",UserSchema);