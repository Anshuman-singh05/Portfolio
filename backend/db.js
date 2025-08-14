// db.js
import mongoose from 'mongoose';
import 'dotenv/config'; // dotenv ko aise import karte hain

const connectDB = async () => {
  try {
    // Fallback to hardcoded URI if environment variable not loaded
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://anshumanrajput91:z83c4NxkBv6yJjmp@cluster1.ovjgwdy.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster1';
    
    console.log('Attempting MongoDB connection...');
    console.log('Using env variable:', process.env.MONGO_URI ? 'Yes' : 'No - Using fallback');
    
    await mongoose.connect(mongoUri, {
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