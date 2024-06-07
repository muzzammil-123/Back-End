import multer from 'multer'

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/temp')
  },
  filename: (req, file, cb) => {
    let uniqueSuffix = Date.now() * Math.round(Math.random() * 1e9)
    cb(null, `${file.fieldname}_${uniqueSuffix}`)
  },
})

let upload = multer({ storage })

export default upload
