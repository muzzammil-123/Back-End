import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
const connectDB = async  () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to DB : ${DB_NAME}`)
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}


export { connectDB}