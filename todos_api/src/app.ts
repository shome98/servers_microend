import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./connect.db";

const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
    res.send("😊 Welcome to api!!!!")
});

// connectToDatabase()
//     .then(() => console.log("✅ Connected to database"))
//     .catch(error => console.log("❌ Database connection Failed with ", error));

export default app;