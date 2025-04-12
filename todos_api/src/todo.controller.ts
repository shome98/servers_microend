import {Request,Response} from "express"
import Todo, { ITodo } from "./todo.model";
export const getTodos = async (req: Request, res: Response) => {
    try {
        const userId = req?.userId;
        if (!userId) {
            return res.status(401).send({ error: "🚫 Unauthorized. User ID not found." });
        }
        //const userId = "67e051d767ef5cc8fa0a5f83";
        //await connectToDatabase();
        const todos = await Todo.findById({ userId: userId });
        if (!todos) {
            return res.send({ error: "🚫 Failed to retrieve the todos." }).status(401);
        }
        return res.send({ message: "✅ Successfully fetched the todos.", todos: todos }).status(201);
        
    } catch (error) {
        console.error("❌ Error retrieving the todos:", error);
        return res.send({ error: "⚠️ Oops! Failed to retrieve the todos. Please try again." }).status(500);
    }
    
};
