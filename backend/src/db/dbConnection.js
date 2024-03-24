import mongoose from 'mongoose';

const dbConnection=async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(connect.connection.host);
    } catch (error) {
        console.log("Error in connection with database");
    }
   
}


export { dbConnection };

