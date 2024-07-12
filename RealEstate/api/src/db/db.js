import mongoose from 'mongoose'
import {DB_NAME} from '../constant.js'
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log("Connection Successful")       
    } catch (error) {
        console.log("Connection Failed", error)
    }
}

export default connectDB