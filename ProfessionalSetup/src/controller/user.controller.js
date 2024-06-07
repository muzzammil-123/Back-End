import { User } from '../models/user.model.js'

let userRegister = async (req, res, next) => {
  try {
    const { fullname, username, password, email, role, avatar, coverImage } = req.body
    console.log(username)
    if (!fullname || !username || !password || !email || !role) {
      res.status(400).json({
        message: `please Provide all fields`,
      })
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    })

    if (existedUser) {
      res.status(400).json({
        message: `User already exists`,
      })
    }

    const profileImage = req.file?.profileImage[0]?.path
    const coverImagePath = req.file?.coverImage[0]?.path

    if (!profileImage) {
      res.status(400).json({
        message: `please provide profile image`,
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `Server Error`,
    })
  }
}

export default userRegister
