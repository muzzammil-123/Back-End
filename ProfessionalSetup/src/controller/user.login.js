import { User } from '../models/user.model.js'

const generateRefreshandAccessToken = async (userId) =>{
  const user = await User.findById(userId)
  const refreshToken = user.generateRefreshToken()
  const accessToken = user.generateAccessToken()
  
  user.refreshToken = refreshToken
  await user.save({ validateBeforeSave: false })
  return { accessToken, refreshToken }
}

 const userLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body
    if(!username || !password) {
      res.status(400).json({
        message: "Plz provide all fields"
      })
    }

    const user = await User.findOne({
      $or :[{username}, {email}] 
  })

    if(!user) {
      res.status(400).json({
        message: "User not found"
      })
    }

    const isPasswordMatch = await user.isPasswordMatch(password)

    if(!isPasswordMatch) {
      res.status(400).json({
        message: "Invalid credentials"
      })
    }

    const { accessToken, refreshToken } = await user.generateRefreshandAccessToken()


    
    res.status(200).json({
      accessToken,
      refreshToken,
      message: "Login successful",
      user : user
    })

  } catch (error) {
    res.status(500).json({
      message : 'Something went wrong'
    })
  }
  console.log("Error : " , error)
} 

export default userLogin  