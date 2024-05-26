import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) {
      return null
    }
    const result = cloudinary.uploader.upload(filepath, {
      public_id : `shoes`
    })
    console.log(`File uploaded Successfully, ${result.url}`)
  } catch (error) {
    console.log(error)
    fs.unlinkSync(filepath)
    return null
  }
}

export default uploadOnCloudinary