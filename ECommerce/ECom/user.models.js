import mongooes from "mongooes"

const userSchema = new mongooes.Schema({
    username : {
        type : String,
        unique:true,
        required:true
    },
    password : {
        type :String,
        minlength: [6,"The password should be of min length 6"],
        required : true
    },
    email : {
        type : String,
        lowercase : true,
        required : true
    }
},{timestamps:true})

export const User = mongooes.model("User",userSchema)