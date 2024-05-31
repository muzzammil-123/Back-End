import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'
dotenv.config({
  path: './.env',
})

const app = express()

connectDB().then(() => {
  app.listen(process.env.PORT || 3500, () => {
    console.log(`Server running on port ${process.env.PORT || 8080}`)
  })
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
})
