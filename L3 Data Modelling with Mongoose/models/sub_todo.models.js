import mongoose from "mongoose";

const subTodoSchmea = new mongoose.Schema(
  {
    content: {
      type: String,
      required : true,

    },
    parenttodo : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Todo"
    }
  },
  { timestamps : true }
);

export const SubTodo = mongoose.model("Subtodo", subTodoSchmea);
