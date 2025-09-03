import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); //exit with failure
  }
};

export default connectDB;
