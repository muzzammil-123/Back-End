import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'
let connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`Connected to DB : ${DB_NAME}`)
  } catch (err) {
    console.log(`Error : ${err}`)
  }
}

export default connectDB
