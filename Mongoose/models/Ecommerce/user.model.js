import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        required : [true, "Password is Required"],
        maxlength: 16
    },
    age: {
        type: Number,
        min: 18,
        max: 100,
        required : [true, "Age is required"],
    }
}, {timestamps : true})


export default mongoose.model("User", userSchema)
