import {User} from "../models/user.model.js"

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        console.log(error)
        throw new Error('Something went wrong in token generation')
    }
}


const userLogin = async (req, res) => {
    try {
        console.log(`Req body`, req.body)
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({
                message: "Plz provide all fields"
            })
        }
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({
                message: "Invalid username or password"
            })
        }

        const isMatch = await user.isPasswordMatch(password)
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid username or password"
            })
        }

        const loggedIn = await User.findById(user._id).select('-password -refreshToken')

        const option = {
            httpOnly: true,
            secure: true,   
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

        return res.status(200).cookie("accessToken", accessToken, option).cookie("refreshToken", refreshToken, option).json({ message : "Login successful",
            user: loggedIn
         })


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default userLogin