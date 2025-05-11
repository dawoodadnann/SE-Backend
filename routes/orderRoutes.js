import express from 'express';
import { createOrder, approveOrder, cancelOrder } from '../controllers/orderController.js';
import { getOrderHistory } from '../controllers/orderController.js';

const router = express.Router();

router.post('/orders', createOrder);

// Manager routes
router.patch('/orders/:orderId/approve', approveOrder);
router.patch('/orders/:orderId/cancel', cancelOrder);

router.get('/orders/history', getOrderHistory);

router.get('/pending', async (req, res) => {
  try {
    const pendingOrders = await Order.find({ status: 'pending' });
    res.json(pendingOrders);
  } catch (err) {
    console.error('Error fetching pending orders:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
  });


  router.put('/update-status/:id', async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  if (!['pending', 'completed', 'cancelled'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value.' });
  }

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.error('Error updating order status:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
