// lib/db.js

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Define the MONGODB_URI environment variable");
}

let cached = global.mongo || null;

if (cached) {
  console.log("Using cached MongoDB connection");
  return cached;
}

async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Cannot connect to the database");
  } 
}

export default connectDB;
