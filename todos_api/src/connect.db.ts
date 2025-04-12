import mongoose, { Connection } from "mongoose";

const MONGODB_URI = "mongodb+srv://shomeshome234:oyK2WdR4Z0SJqM7q@cluster0.hjb3h.mongodb.net/todo_nextsaas";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose= { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Connection> {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Creating a new MongoDB connection...");
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected!");
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }

  return cached.conn;
}