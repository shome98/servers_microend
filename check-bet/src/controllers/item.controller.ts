import { Request, Response } from 'express';
import ItemModel from '../models/item.model';

// Create a new item
export const createItem = async (req: Request, res: Response) => {
  try {
    const newItem = await ItemModel.create(req.body);
    res.status(201).json(newItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get all items
export const getAllItems = async (req: Request, res: Response) => {
    try {
        const uid = req.userId;
        
    const items = await ItemModel.find();
    res.status(200).json({items,"uid":uid});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single item by ID
export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await ItemModel.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update an item by ID
export const updateItemById = async (req: Request, res: Response) => {
  try {
    const updatedItem = await ItemModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the modified document rather than the original
      runValidators: true, // Ensure schema validation on update
    });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error: any) {
    res.status(400).json({ message: error.message }); // Handle validation errors
  }
};

// Delete an item by ID
export const deleteItemById = async (req: Request, res: Response) => {
  try {
    const deletedItem = await ItemModel.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(204).send(); // Respond with no content for successful deletion
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};