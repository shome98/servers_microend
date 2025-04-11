interface ITodo{
    _id: string|Schema.Types.ObjectId;
    title: string;
    description?: string;
    completed: boolean|false;
    createdAt?: Date;
    updatedAt?: Date;
}