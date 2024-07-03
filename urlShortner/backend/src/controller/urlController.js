import { URL } from '../models/urlShortnerModel.js'
import {nanoid} from 'nanoid'

const urlShortner = async (req, res) => {
    try {
        const { url } = req.body
        if (!url) {
            return res.status(400).json({
                message: 'Please provide a url'
            })
        }

        const shortId = nanoid(5)

        const shortUrl = await URL.create({
            shortUrl: shortId,
            redirectUrl: url,
            visitHistory: []
        })

        res.status(200).json({ message: 'Url shortened', shortUrl })

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}


export  { 
    urlShortner
}