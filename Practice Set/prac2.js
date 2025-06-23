import mongooes from "mongooes"


const UserSchema = new mongooes.Scheme({
    username :{
        type : String,
        required : true,
        unique : true
    } ,password : {
        type : String,
        minlength : [6,"THe minimum length is 6 characters"]
    }, email : {
        type :String,
        lowercase : true
    }
},{timestamps:true})

export const user = mongooes.model("User",UserSchema)