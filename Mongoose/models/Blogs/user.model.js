import mongoose, { model } from "mongoose";

const user = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
    },
    password: {
      required: true,
      min: 8,
      max: 16,
      type: String,

    },
  },
  { timestamps: true }
);

export default mongoose.model("User", user)