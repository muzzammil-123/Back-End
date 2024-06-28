import { User } from "../models/user.model.js"

const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body

        if (!oldPassword || !newPassword) {
            return res.status(400).json({
                message: 'Please provide old and new password'
            })
        }

        const user = await User.findById(req.user._id)

        const isMatch = await user.isPasswordMatch(oldPassword)

        if (!isMatch) {
            return res.status(400).json({
                message: 'Old password is incorrect'
            })
        }

        user.password = newPassword

        await user.save({ validateBeforeSave: false })

        return res.status(200).json({
            message: 'Password changed successfully',
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error while changing password',
            success: false1
        })
        console.log(error)
    }
}