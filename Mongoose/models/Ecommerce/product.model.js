import mongoose from mongoose

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
}, { timestamps: true })

export default mongoose.model("Product", productSchema)