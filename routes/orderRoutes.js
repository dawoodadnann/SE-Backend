import express from 'express';
import { createOrder, approveOrder, cancelOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/orders', createOrder);

// Manager routes
router.patch('/orders/:orderId/approve', approveOrder);
router.patch('/orders/:orderId/cancel', cancelOrder);

export default router;
