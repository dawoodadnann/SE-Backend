// controllers/orderController.js
import Order from '../models/Order.js';

export const approveOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (order.status !== 'Pending') {
      return res.status(400).json({ message: 'Only pending orders can be approved' });
    }

    order.status = 'Approved';
    await order.save();

    res.status(200).json({ message: 'Order approved successfully', order });
  } catch (err) {
    console.error('Approval error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    if (order.status !== 'Pending') {
      return res.status(400).json({ message: 'Only pending orders can be cancelled' });
    }

    order.status = 'Cancelled';
    await order.save();

    res.status(200).json({ message: 'Order cancelled successfully', order });
  } catch (err) {
    console.error('Cancellation error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};


export const createOrder = async (req, res) => {
  try {
    const { userId, items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in the order' });
    }

    const newOrder = new Order({
      userId,
      items,
      totalPrice,
      status: 'Pending',
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (err) {
    console.error('Creation error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

import Order from '../models/Order.js';

export const getOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('userId', 'name email')  // optional
      .populate('items.menuItemId', 'name price');

    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching order history:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

