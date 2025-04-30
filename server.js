import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import orderRoutes from './routes/orderRoutes.js';  
import cartRoutes from './routes/cartRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Auth & Menu APIs
app.use('/api/auth', authRoutes);
app.use('/api',    menuRoutes);
app.use('/api', orderRoutes);   
app.use("/api/cart", cartRoutes);



mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT||5000, () => 
    console.log('Server running on port', process.env.PORT||5000)))
  .catch(err => console.error(err));
