import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice } = req.body;
    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: 'Invalid order data' });
    }

    const order = new Order({ userId, items, totalPrice });
    await order.save();
    res.status(201).json({ 
      message: 'Order placed successfully', 
      orderId: order._id 
    });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
