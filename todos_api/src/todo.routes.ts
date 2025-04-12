import { Router,Request,Response,NextFunction } from "express";
import { createTodo, getTodoById, getTodos, toggleComplete, updateTodo } from "./todo.controller";

export const asyncHandler = (requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => next(error));
    };
};
const router = Router();

router.get("/", asyncHandler(getTodos));
router.post("/", asyncHandler(createTodo));
router.get("/:id", asyncHandler(getTodoById));
router.post("/:id", asyncHandler(updateTodo));
router.patch("/:id", asyncHandler(toggleComplete));

export default router;