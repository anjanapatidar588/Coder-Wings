import { Router } from "express";
const router = Router();

import { getProducts, addProduct } from "../controllers/productController";

router.get("/products", getProducts);
router.post("/products", addProduct);

export default router;