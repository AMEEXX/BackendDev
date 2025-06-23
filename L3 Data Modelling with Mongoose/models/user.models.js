import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : [ true , "Password is required"],
            minlength : [6, "Password must be at least 6 characters long"]
        },
        email : {
            type : String,
            required : [true, "Email is required"],
            lowercase : true,
            unique :true,
            
        }
    },{timestamps:true}
)
export const User = mongoose.model("User",userSchema);
