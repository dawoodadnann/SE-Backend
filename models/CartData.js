import mongoose from "mongoose";

const cartDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageSrc: { type: String, required: true },
  price: { type: String, required: true },
  label: String,
  category: String,
  rating: Number,
  reviews: Number,
  calories: Number,
  description: String,
  ingredients: [String],
}, {
  timestamps: true,
});

const CartData = mongoose.model("CartData", cartDataSchema);
export default CartData;
