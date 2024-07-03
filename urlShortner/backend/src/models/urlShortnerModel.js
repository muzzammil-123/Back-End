import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    redirectUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    visitHistory: [
        {
            ip: String,
            time: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
})

const URL = mongoose.model('URL', urlSchema)

export { URL }