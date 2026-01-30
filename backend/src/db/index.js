import { config } from "../config/index.js"
import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(config.mongoUri);
    console.log(`MongoDB is connected`);
}

export {connectDB};