// server.js
import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'; 
import { fileURLToPath } from 'url'; 

// Route files import karo
import projectRoutes from './routes/projects.js';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js';

// __dirname ko ES modules me use karne ke liye setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);


if (process.env.NODE_ENV === 'production') {
  // Static folder set karo
  app.use(express.static(path.join(__dirname, '../client/dist')));

  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));
