import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;

async function connectDB() {
  mongoose.set("strictQuery", true);

  try {
    if (mongodbUrl) {
      await mongoose.connect(mongodbUrl);
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

export default connectDB;
