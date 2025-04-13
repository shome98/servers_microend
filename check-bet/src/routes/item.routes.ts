import express, { Request,Response,NextFunction } from 'express';
import {
  createItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItemById,
} from '../controllers/item.controller';

export const asyncHandler = (requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => next(error));
    };
};

const router = express.Router();

// Create a new item
router.post('/', asyncHandler(createItem));

// Get all items
router.get('/', asyncHandler(getAllItems));

// Get a single item by ID
router.get('/:id', asyncHandler(getItemById));

// Update an item by ID
router.put('/:id', asyncHandler(updateItemById));

// Delete an item by ID
router.delete('/:id', asyncHandler(deleteItemById));

export default router;