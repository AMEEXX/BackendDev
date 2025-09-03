import mongoose from "mongoose";

const subTodoSchmea = new mongoose.Schema(
  {
    content: {
      type: String,
    },
  },
  { timestamps : true }
);

export const SubTodo = mongoose.model("Subtodo", subTodoSchmea);
