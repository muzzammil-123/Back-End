import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'deryzkt9p',
  api_key: '794782777771589',
  api_secret: '3kcdtwuVdb_dAbSVGh6yeqCfkqQ'
});

const uploadOnCloudinary = async (filepath) => {
  try {
    if (!filepath) {
      return null
    }
    const result = await cloudinary.uploader.upload(filepath, {
      public_id: `shoes`
    })
    console.log(`File uploaded Successfully, ${result.url}`)
    return result.url
  } catch (error) {
    console.log(error)
    fs.unlinkSync(filepath)
    return null
  }
}

export default uploadOnCloudinary