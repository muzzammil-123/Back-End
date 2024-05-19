import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    Description: {
        type: String,
        required : true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema)