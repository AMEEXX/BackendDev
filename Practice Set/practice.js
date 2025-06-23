import mongooes from "mongooes"


const sub_todoSchema = new mongooes.Schema({
    content : {
        type : String,
        required : true,
    },
    complete : {
        type : String,
        required : Boolean,
        default : false
    },creaqtedBY : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps : true})

export const Subtodo = mongooes.schema.model("Subtodo",sub_todoSchema)