// routes/feedbackRoutes.js
import express from 'express';
//import { submitFeedback } from '../controllers/feedbackController.js';
import { submitFeedback, getAllFeedbacks } from "../controllers/feedbackController.js";

// <-- new

const router = express.Router();

//router.post('/feedback', submitFeedback);
router.post("/feedback", submitFeedback);
router.get("/feedback/all", getAllFeedbacks); 

export default router;
