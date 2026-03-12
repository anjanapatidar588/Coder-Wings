 //user model or user schema
 
import { Schema, model } from "mongoose";

const cartSchema = new Schema({

  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },

  quantity: {
    type: Number,
    default: 1
  }

}, { timestamps: true });

export default model("Cart", cartSchema);