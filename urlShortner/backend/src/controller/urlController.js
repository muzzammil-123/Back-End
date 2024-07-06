
import { URL } from '../models/urlShortnerModel.js'
import { nanoid } from 'nanoid'

const urlShortner = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ message: 'Please provide a url' });
        }

        const shortId = nanoid(5);

        const shortUrl = await URL.create({
            shortUrl: shortId,
            redirectUrl: url,
            visitHistory: []
        });

        return res.status(200).json({message: 'URL shortened' , shortUrl})

    } catch (error) {
        console.error('Error in urlShortner:', error);
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message
        });
    }
};

const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params
        const urlData = await URL.findOne({ shortUrl })

        if (!urlData) {
            return res.status(404).json({ message: 'URL not found' })
        }

        // Update visit history
        urlData.visitHistory.push({ ip: req.ip })
        await urlData.save()

        // Redirect to the original URL
        res.redirect(urlData.redirectUrl)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

export { urlShortner, redirectUrl }
