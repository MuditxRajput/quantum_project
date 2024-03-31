import { v2 as cloudinary } from 'cloudinary';
          
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret:process.env.CLOUD_API,
  });

const uploadOnCloudinary=async(LocalFilePath)=>{
  try {
    if(!LocalFilePath) return null;
        const res = await cloudinary.uploader.upload(LocalFilePath,
       
        function(error, result) { });
        return res;
  } catch (error) {
    return error;
  }
}

export { uploadOnCloudinary };
