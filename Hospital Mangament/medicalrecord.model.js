import mongoose from "mongoose"

const medicalrecordSchema = new mongoose.Schema ({
    name : {
        type : String,
        required: true,
        
    }, Diagnosed : {
        required : true,
        type: String,
    }, age : {
        type:Number
    }, addresss : {
        type : String
    }, //gemder, blood group 
    admiitedin:{
        type  : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }

},{timestamps : true})

export const Record = mongoose.model("Record",medicalrecordSchema)