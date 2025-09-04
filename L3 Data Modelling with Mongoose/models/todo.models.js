
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdby : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User" // this is the same schema as the schmea or user...be careful the name should be exact 
    },
    subtodo : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'SubTodo'
        }
    ]
    
  },
  { timestamps: true}
);

export const todo = mongoose.model("Todo", todoSchema);
