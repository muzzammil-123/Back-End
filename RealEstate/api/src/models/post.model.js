import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String], // Change from 'String' to 'Array of Strings'
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    longitude: {
      type: String, // Changed from 'longitute' to 'longitude'
      required: true,
    },
    latitude: {
      type: String,
      required: true,
    },
    bedroom: {
      type: Number,
      required: true,
    },
    bathroom: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["rent", "buy"], // Update enum to include 'rent' and 'buy'
      required: true,
    },
    property: { // Added property type
      type: String,
      enum: ["apartment", "house", "condo", "land"],
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
