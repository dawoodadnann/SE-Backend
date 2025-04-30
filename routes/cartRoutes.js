import express from "express";
//import { addToCart, getCartItems } from "../controllers/cartController.js";
import { addToCart, getCartItems, deleteCartItem } from "../controllers/cartController.js";



const router = express.Router();


router.post("/add", addToCart);
router.get("/", getCartItems);
router.delete("/:id", deleteCartItem);


export default router;
