import { Router } from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, toggleComplete, updateTodo } from "./todo.controller";
import { auth } from "./auth.middleware";
export const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => next(error));
    };
};
const router = Router();
router.get("/", asyncHandler(auth), asyncHandler(getTodos));
router.post("/", asyncHandler(auth), asyncHandler(createTodo));
router.get("/:id", asyncHandler(auth), asyncHandler(getTodoById));
router.post("/:id", asyncHandler(auth), asyncHandler(updateTodo));
router.patch("/:id", asyncHandler(auth), asyncHandler(toggleComplete));
router.delete("/:id", asyncHandler(auth), asyncHandler(deleteTodo));
export default router;
