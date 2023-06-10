import mongoose from "mongoose";

const requiredStringType = {
  type: String,
  required: true,
  unique: true,
};
const postSchema = new mongoose.Schema(
  {
    title: requiredStringType,
    desc: requiredStringType,
    content: requiredStringType,
    photo: {
      type: String,
      required: true,
    },
    author: requiredStringType,
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", postSchema);
