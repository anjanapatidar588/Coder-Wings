import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});