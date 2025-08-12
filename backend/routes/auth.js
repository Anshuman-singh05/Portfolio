import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // User model import kiya
import 'dotenv/config';

const router = express.Router();

// @route   POST /api/auth/login
// @desc    Authenticate admin and get token
// @access  Public
router.post('/login', async (req, res) => {
  // 1. Frontend se username aur password nikalo
  const { username, password } = req.body;

  try {
    // 2. Database me username se user ko dhoondo
    let user = await User.findOne({ username });
    if (!user) {
      // Agar user nahi mila, to error bhejo
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 3. Aaye hue password ko database ke hashed password se compare karo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Agar password match nahi hua, to error bhejo
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // 4. Agar sab sahi hai, to token banao
    const payload = {
      user: {
        id: user.id, // User ki ID token me daal do
      },
    };

    // Token ko JWT_SECRET se sign karo (yeh 1 ghante me expire ho jayega)
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // Token ko frontend par wapas bhej do
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;