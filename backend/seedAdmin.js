import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import 'dotenv/config';
import User from './models/User.js';
import connectDB from './db.js';

const createAdmin = async () => {
  // 1. Database se connect karo
  await connectDB();

  try {
    // 2. Check karo ki admin pehle se hai ya nahi
    const adminExists = await User.findOne({ username: 'admin' });
    if (adminExists) {
      console.log('Admin user already exists! 👍');
      mongoose.connection.close();
      return;
    }

    // 3. Apna password set karo
    const password = 'singhisking12345@'; // <-- Isko zaroor change kar lena!

    // 4. Password ko encrypt (hash) karo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Naya admin user banao
    const adminUser = new User({
      username: 'admin', // Aap isko bhi change kar sakte ho
      password: hashedPassword,
    });

    // 6. User ko database me save karo
    await adminUser.save();
    console.log('Admin user created successfully! ✅');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    // 7. Database connection band kar do
    mongoose.connection.close();
  }
};

// Script ko chalao
createAdmin();