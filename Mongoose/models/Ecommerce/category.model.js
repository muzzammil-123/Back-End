import mongoose from "mongoose";

const category = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true })