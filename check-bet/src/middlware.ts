import { NextFunction, Request, Response } from "express";

export async function middleware(req: Request,res:Response, next: NextFunction) {
    req.userId = "this is user";
    next();
}