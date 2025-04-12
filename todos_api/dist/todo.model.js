import mongoose, { Schema } from "mongoose";
const todoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false },
}, { timestamps: true });
const modelName = "Todo";
// Check if the model is already registered
const Todo = mongoose.models[modelName] ||
    mongoose.model(modelName, todoSchema);
//const Todo = models?.Todo||mongoose.model<ITodo>("Todo", todoSchema);
export default Todo;
