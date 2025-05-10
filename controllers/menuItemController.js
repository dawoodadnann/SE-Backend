// controllers/menuItemController.js
import MenuItem from '../models/MenuItem.js';

export const addMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, image } = req.body;

    // Validation
    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newItem = new MenuItem({ name, description, price, category, image });
    await newItem.save();

    res.status(201).json({ message: 'Menu item added successfully', item: newItem });
  } catch (err) {
    console.error('Failed to add menu item:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
