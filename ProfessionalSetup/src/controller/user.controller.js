import { User } from '../models/user.model.js'
import uploadOnCloudinary from '../utils/cloudinary.js'

let userRegister = async (req, res, next) => {
  try {
    const { fullname, username, password, email, role } = req.body
    if (!fullname || !username || !password || !email || !role) {
      return res.status(400).json({
        message: `Please provide all fields`,
      })
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }],
    })

    if (existedUser) {
      return res.status(400).json({
        message: `User already exists`,
      })
    }

    const profileImagePath = req.files.profileImage[0].path

    console.log(profileImagePath)


    if (!profileImagePath) {
      return res.status(400).json({
        message: `Please provide profile image`,
      })
    }

    const profileImage = await uploadOnCloudinary(profileImagePath)

    if (!profileImage) {
      return res.status(400).json({
        message: `Error uploading profile image`,
      })
    }

    const user = await User.create({
      fullname,
      username,
      email,
      password,
      role,
      profileImage: profileImage.url,
    })

    const userCreated = await User.findById(user._id).select('-password -refreshToken')
    if (!userCreated) {
      return res.status(400).json({
        message: `User not created`,
      })
    }

    return res.status(201).json({
      message: `User created successfully`,
      user: userCreated
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: `User didnot register`,
    })
  }
}

export default userRegister
