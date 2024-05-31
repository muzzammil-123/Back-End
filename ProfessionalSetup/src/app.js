import express from 'express'
import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({extended: true, limit : '16kb'}))
app.use(cookieParser())
app.use(express.static('public'))

import useRouter from './routers/user.routes.js'
app.use('/user', useRouter)

export { app }