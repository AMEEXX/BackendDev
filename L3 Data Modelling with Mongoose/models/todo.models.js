import mongooes from "moongooes"

const TodoSchema = new mongooes.Schema({
    content: {
        type : String,
        required:true
    }, complete: {
        required : true
    },
    createdBy : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "User"
    },
    sub_todo : [
        {type: mongooes.Schema.Types.ObjectId,
            ref : "Sub_Todo" 
        }//Array for the subtodos.
        
    ]
},
{timestamps:true})


export const Todo = mongoose.model("Todo",todoSchema)