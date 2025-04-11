import mongoose, { Document, models, Schema } from "mongoose";

interface ITodo extends Document{
    title: string;
    description?: string;
    completed: boolean|false;
    createdAt?: Date;
    updatedAt?: Date;
    userId?: Schema.Types.ObjectId | string;
}
const todoSchema = new Schema<ITodo>({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
const Todo = models?.Todo||mongoose.model<ITodo>("Todo", todoSchema);
export default Todo;