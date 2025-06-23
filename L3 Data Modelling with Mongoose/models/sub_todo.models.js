import mongooes from "mongooes"

const sub_todoSchema = new mongooes.Schema({
    content : {
        required : true,
        type : String,

    },
    complete : {
        type : Boolean,
        default: false

    },
    createdBy : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "User"
    }
    
},
{timestamps:true})


export const sub_todo = mongooes.model("Sub_Todo",sub_todoSchema)