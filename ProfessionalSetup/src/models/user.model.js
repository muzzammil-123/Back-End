import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
let userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      required: true,
      type: String,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
    },
    profileImage: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this
  return await bcrypt.compare(password, user.password)
}

userSchema.methods.generateAccessToken = async function (){
  const user = this
  const token = jwt.sign({
    _id: user._id,
    role: user.role,
    email: user.email,
    usrname: user.username
  }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
}

userSchema.methods.generateRefreshToken = async function (){
  const user = this
  const token = jwt.sign({
    _id: user.id,
    role: user.role,
    email: user.email,
    usrname: user.username
  }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY })
}

export const User = mongoose.model('User', userSchema)
