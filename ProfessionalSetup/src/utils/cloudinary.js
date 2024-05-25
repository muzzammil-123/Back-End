import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadResult = cloudinary.uploader.upload("file",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });