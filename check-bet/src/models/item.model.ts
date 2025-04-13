import mongoose, { Schema, Document } from 'mongoose';

// Define the Item interface
export interface Item extends Document {
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the Item schema
const ItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the Item model
const ItemModel = mongoose.model<Item>('Item', ItemSchema);

export default ItemModel;