import { v2 as cloudinary } from "cloudinary"; // Cloud based image and video management services
import fs from "fs"; // Fs is File System that is built-in functionality in Nodejs to handle files

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



const uploadOnCloudinary = async (localFilePath) => {
  try {
    // console.log("check",localFilePath)
    if (!localFilePath) return null;
    // console.log("check2")
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("check3")

    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // console.log("facing error")
    fs.unlinkSync(localFilePath); // when upload operation failed, remove the locally saved temporary file
    return null;
  }
};

export { uploadOnCloudinary };
