import express from 'express';
const app = express();

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))


import urlRoutes from './routes/urlRoutes.js'
app.use('/url', urlRoutes)


export { app }