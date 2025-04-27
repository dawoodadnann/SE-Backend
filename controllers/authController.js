import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


export const register = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if user already exists
      const userExists = await User.findOne({ username });
      if (userExists) {
        return res.status(400).json({ message: "Username already exists" });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword,
      });
  
      // Save user to the database
      await newUser.save();
  
      // Send success response
      res.status(201).json({ message: "User successfully registered!" });
    } catch (error) {
      console.error("Error in registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({ token, username: user.username });

  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
