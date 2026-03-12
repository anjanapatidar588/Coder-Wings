//user model or user schema

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: Number,
    required: true
  },

  password: {
    type: String
  },

}, { timestamps: true });

export default model("user", userSchema);