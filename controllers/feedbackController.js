// controllers/feedbackController.js
import Feedback from '../models/Feedback.js';

// Submit feedback
export const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create new feedback
    const feedback = new Feedback({ name, email, message });
    await feedback.save();

    // Return the saved feedback
    res.status(201).json({
      message: 'Feedback submitted',
      feedback: {
        _id: feedback._id,
        name: feedback.name,
        email: feedback.email,
        message: feedback.message,
        createdAt: feedback.createdAt,
      }
    });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all feedbacks
export const getAllFeedbacks = async (req, res) => {
  try {
    // Fetch feedbacks
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json(feedbacks);
  } catch (err) {
    console.error('Error fetching feedbacks:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
