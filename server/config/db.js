import mongoose from "mongoose";

let dbReady = false;

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    dbReady = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    dbReady = false;
    console.error("❌ MongoDB connection error:", err);
  }
};

export const isDbReady = () => dbReady;

export const closeDB = async () => {
  await mongoose.connection.close();
};
