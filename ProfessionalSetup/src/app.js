import express from 'express'
const app = express()

import cookieParser from 'cookie-parser'
app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

import userRouter from './routers/user.routes.js'

app.use('/user', userRouter)

export { app }