import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();
const mongodbUrl = process.env.MONGODB_URI;

async function db() {
  mongoose.set("strictQuery", true);

  try {
    if (mongodbUrl) {
      await mongoose.connect(mongodbUrl);
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
export default db;
