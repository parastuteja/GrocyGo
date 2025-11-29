import mongoose from "mongoose";

const connectDB = async () => {
  try {
    
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB connection error:", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/grocygo`);

  } catch (error) {
    console.error("Error while connecting to DB:", error);
  }
};

export default connectDB;
