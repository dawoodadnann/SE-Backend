import express from 'express';
import { getMenuItems } from '../controllers/menuController.js';
const router = express.Router();

// GET /api/menu
router.get('/menu', getMenuItems);

export default router;
