import express from 'express'
import multer from 'multer'
const app = express()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
        cb(null, `${file.fieldname}-${uniqueSuffix}`)
    }
})

const upload = multer({ storage }).single("file")



app.set("view engine", "ejs")

app.get("/", upload, (req, res) => {
    res.render("index")
})
app.post("/upload", upload, (req, res) => {
    res.send("file uploaded successfully")
})

app.listen(8080, () => {
    console.log("Server is running on port 8080")
})