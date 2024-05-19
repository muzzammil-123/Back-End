import mongoose from "mongoose"
import DB_NAME from "../constants.js"
async function connectDB() {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database is connected to ${DB_NAME}`)
    } catch (error) {
        console.log(`Error : ${error}`)
    }
}
export default connectDB