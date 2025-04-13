import express, {Express} from "express";
import { add } from "./add";
import dotenv from 'dotenv';
import { connectDB } from '../src/config/db';
import itemRoutes from '../src/routes/item.routes';

dotenv.config();
const app:Express = express();

const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use item routes
app.use('/api/items', itemRoutes); // Correct: Mount the router as middleware

app.get('/', (req, res) => {
  res.send(`CRUD API with MongoDB and TypeScript is running! with ${add(90,98)}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;