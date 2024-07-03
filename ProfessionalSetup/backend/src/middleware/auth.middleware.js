import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

const verifyJWTToken = async (req, res, next) => {
    try {
      const token = req.cookies?.accessToken || req.headers?.authorization?.replace('Bearer ', '')

      if (!token) {
        return res.status(401).json({
            message: 'Access Denied, Please Login',
        })
      }

        if (token) {
            const decodedInfo = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

            const user = await User.findById(decodedInfo._id).select('-refreshToken, -password')

            req.user = user

            next()
        }
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' })
        console.log(error)
        res.status(401).json({
            message: 'Access Denied, Please Login',
        })
    }

}


export default verifyJWTToken