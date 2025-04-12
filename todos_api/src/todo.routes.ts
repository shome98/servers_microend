import { Router,Request,Response,NextFunction } from "express";
import { getTodos } from "./todo.controller";

export const asyncHandler = (requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => next(error));
    };
};
const router = Router();

router.get("/", asyncHandler(getTodos));

export default router;