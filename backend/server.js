// server.js
import express from 'express';
import connectDB from './db.js';
import cors from 'cors';
import 'dotenv/config';

// Route files import karo
import projectRoutes from './routes/projects.js';
import authRoutes from './routes/auth.js';
import contactRoutes from './routes/contact.js'; // Contact route import kiya

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Express ko batao ki kaun sa URL kis route file ko use karega
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes); // Contact route register kiya

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`));
