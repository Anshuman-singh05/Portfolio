import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import 'dotenv/config'; // .env file ko load karne ke liye
import User from './models/User.js'; // <-- Path theek kar diya gaya hai
import connectDB from './db.js'; // Database connection function import karein

const createAdmin = async () => {
  // 1. Database se connect karo
  await connectDB();

  try {
    // 2. .env file se username aur password lo
    const adminUsername = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD; 

    // Check karo ki variables .env mein hain ya nahi
    if (!adminUsername || !password) {
        console.error('Error: ADMIN_USERNAME or ADMIN_PASSWORD not found in .env file. Please add them.');
        mongoose.connection.close();
        return;
    }

    // 3. Check karo ki admin pehle se hai ya nahi
    const adminExists = await User.findOne({ username: adminUsername });
    if (adminExists) {
      console.log(`Admin user '${adminUsername}' already exists! 👍`);
      mongoose.connection.close();
      return;
    }

    // 4. Password ko encrypt (hash) karo
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 5. Naya admin user banao
    const adminUser = new User({
      username: adminUsername,
      password: hashedPassword,
      // Agar aapke User model mein 'role' hai, toh use bhi add karein
      // role: 'admin'
    });

    // 6. User ko database me save karo
    await adminUser.save();
    console.log(`Admin user '${adminUsername}' created successfully! ✅`);

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    // 7. Database connection band kar do
    mongoose.connection.close();
  }
};

// Script ko chalao
createAdmin();
