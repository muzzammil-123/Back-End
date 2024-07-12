import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './db/db.js'



dotenv.config({
    path: './.env'
})

const app = express()

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

import authRouter from './router/authRouter.js'
app.use('/user', authRouter)
connectDB().then(() => {
    app.listen(3000, () => {
        console.log(`Server running on port  3000`)

    })
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

})