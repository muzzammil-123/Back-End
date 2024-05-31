import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
    username :{
        type: String,
        required :true,
        trim : true,
        unique : true,
        index
    },
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : (true, 'Password is required'),
    },
    fullname : {
        type : String,
        required : true,
        unique : true,
        trim : true
    }
}, { timestamps: true })
