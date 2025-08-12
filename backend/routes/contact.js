import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

// @route   POST /api/contact
// @desc    Save a contact form message
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.status(201).json({ msg: 'Message sent successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
