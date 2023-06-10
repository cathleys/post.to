import mongoose from "mongoose";

const requiredStringType = {
  type: String,
  required: true,
  unique: true,
};
const userSchema = new mongoose.Schema(
  {
    username: requiredStringType,
    email: requiredStringType,
    password: requiredStringType,
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
