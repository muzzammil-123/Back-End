import mongoose from 'mongoose'
import { DB_NAME } from '../contant.js'
let connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Connected to DB : ${DB_NAME}`)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB
