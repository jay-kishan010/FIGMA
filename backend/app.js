import express from 'express';
import dotenv from 'dotenv';
import itemRoutes from './routes/items.js';
import cors from "cors"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/items', itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
