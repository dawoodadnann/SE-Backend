// controllers/feedbackController.js
import Feedback from '../models/Feedback.js';

export const submitFeedback = async (req, res) => {
  try {
    const { userId, menuItemId, rating, comment } = req.body;

    if (!userId || !menuItemId || !rating) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const feedback = new Feedback({ userId, menuItemId, rating, comment });
    await feedback.save();

    res.status(201).json({ message: 'Feedback submitted', feedback });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
