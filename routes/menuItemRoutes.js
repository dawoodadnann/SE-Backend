// routes/menuItemRoutes.js
import express from 'express';
import { addMenuItem } from '../controllers/menuItemController.js';

const router = express.Router();

// POST /api/menu/add
router.post('/menu/add', addMenuItem);

export default router;
