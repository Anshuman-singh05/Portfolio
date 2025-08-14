// server.js / app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ Allowed origins environment ke hisaab se
const allowedOrigins = [
  'http://localhost:5173', // Development
  'https://anshumansinghlegend.netlify.app' // Production
];

// ✅ CORS middleware — routes se pehle
app.use(cors({
  origin: (origin, callback) => {
    // Agar koi origin nahi (Postman, server-to-server) ya allowed hai
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ✅ JSON parser
app.use(express.json());

// ✅ Routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
