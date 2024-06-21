import { User } from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const generateAccessAndRefreshToken = async () => {
  try {
    const user = await User.findById(user._id)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
}


const userRegister = async (req, res, next) => {
  try {
    const { fullname, username, email, role, password } = req.body;
    if (!fullname || !username || !email || !role || !password) {
      res.status(400).json({
        message: "Plz provide all fields"
      })
    }

    const existedUser = await User.findOne({
      $or: [{ username }, { email }]
    })

    if (existedUser) {
      res.status(400).json({
        message: "Username or email already exists"
      })

    }

    const profileImagePath = req.files.profileImage[0].path;
    // const coverImagePath = req.files.coverImage[0].path

    if (!profileImagePath) {
      res.status(400).json({
        message: "Profile Image is required"
      })
    }

    const profileImage = await uploadOnCloudinary(profileImagePath)
    // const coverImage = await uploadOnCloudinary(coverImagePath)

    if (!profileImage) {
      res.status(400).json({
        message: "Profile Image upload Failed"
      })
    }

    const user = await User.create({
      fullname,
      username,
      email,
      role,
      password,
      profileImage: profileImage.url,
      // coverImage: coverImage.url || null
    })

    const userCreated = await User.findById(user._id).select('-password -refreshToken')

    if (!userCreated) {
      res.status(400).json({
        message: "User creation failed"
      })
    }

    if (userCreated) {
      res.status(201).json({
        message: 'User Created Successfully 🎉🎉',
        user: userCreated
      })
    }


  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Something went wrong'
    })
  }
}




export default userRegister 