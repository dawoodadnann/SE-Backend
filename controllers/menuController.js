import MenuItem from '../models/MenuItem.js';

export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
