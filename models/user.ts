import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    Bio: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.User || mongoose.model("User", UserSchema);
