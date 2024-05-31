import multer from 'multer'
import express from 'express'
const app = express()
import ejs from 'ejs'


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload")
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

let upload = multer({ storage }).single('file')

app.set("view engine", "ejs")

app.get("/", upload, (req, res) => {
    res.render("index")
})

app.post("/upload", upload,(req, res) => {
    res.send(`File uploaded successfully`)
})

app.listen(8080, ()=>{
    console.log(`Server running on port 8080`)
})