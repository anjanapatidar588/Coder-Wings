import { Router } from "express";
const router = Router();

import { addToCart, getCartItems, deleteCartItem } from "../controllers/cartController";

router.post("/add", addToCart);
router.get("/", getCartItems);
router.delete("/:id", deleteCartItem);

export default router;