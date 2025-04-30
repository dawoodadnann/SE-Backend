import CartData from "../models/CartData.js";

// POST: Add product to cart
export const addToCart = async (req, res) => {
  try {
    const cartItem = new CartData(req.body);
    await cartItem.save();
    res.status(201).json({ message: "Product added to cart", cartItem });
  } catch (error) {
    console.error("Add to cart failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET: Retrieve all cart items
export const getCartItems = async (req, res) => {
  try {
    const items = await CartData.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Fetch cart items failed:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE: Remove a cart item by ID
export const deleteCartItem = async (req, res) => {
    try {
      const { id } = req.params;
      await CartData.findByIdAndDelete(id);
      res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
      console.error("Delete failed:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
  