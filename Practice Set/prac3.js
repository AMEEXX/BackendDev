import mongooes from "mongooes"
const todoSchema = new mongooes.Schema({
    content : {
        type: String ,

    },createdBy :{
        type : mongooes.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps : true})

export const todo = mongooes.model("User",todoSchema)