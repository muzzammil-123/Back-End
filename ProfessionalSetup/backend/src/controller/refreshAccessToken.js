import { User } from "../models/user.model.js";


const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const refreshAccessToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken

        if (!refreshToken) {
            return res.status(401).json({
                message: "Access Denied, Please Login",
            })
        }

        const decodedInfo = await jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

        const user = await User.findById(decodedInfo._id)

        if (!user) {
            res.status(401).json({
                message: "Access Denied, Invalid refresh token",
            })
        }

        if (user.refreshToken !== refreshToken) {
            return res.status(401).json({
                message: "Access Denied, Refresh Token Does Not Match",
            })
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id)

        const option = {
            httpOnly: true,
            secure: true,
        }

        return res.status(200).cookie("accessToken", accessToken, option).cookie("refreshToken", newRefreshToken, option).json({ accessToken, refreshToken: newRefreshToken, message: "Access Token Refreshed Successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default refreshAccessToken   