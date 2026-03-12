//databse file to connect with dataBase

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = mongoose.connect("mongodb://127.0.0.1:27017/shopDB", {
      useNewUrlParser: true,
   
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;