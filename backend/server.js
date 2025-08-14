// server.js / app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import connectDB from "./db.js";

dotenv.config();

const app = express();

connectDB();

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:5173", // Development
  "https://anshumansinghlegend.netlify.app" // Production
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

// ✅ Routes import


// ✅ Mount routes
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
