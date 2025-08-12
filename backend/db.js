// db.js
import mongoose from 'mongoose';
import 'dotenv/config'; // dotenv ko aise import karte hain

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected... 💾');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB; 