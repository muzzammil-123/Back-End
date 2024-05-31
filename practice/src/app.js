import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json({limit: '16kb'}))
app.use(express.urlencoded({limit : '16kb', extended: true}))
app.use(express.static('public'))
app.use(cookieParser())


import useRouter from './routers/user.routes.js'

app.use('/user', useRouter)
export { app }