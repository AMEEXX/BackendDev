import mongoose from "mongoose"
const dochospitalhourSchema = new mongoose.Schema({
    docID :{
        type : Number,

    },
    hr : {
        type : Number
    }
})

const doctorSchema = new mongoose.Schema({
    DoctorName : {
        type : String
    }, salary : {
        type : Number,
        required: true
    },qualification : {
        type  : String,
        required : true
    }, experienceinyears: {
        type : Number,
        default: 0
    },worksinHospital : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }],dochours : {
        type : [dochospitalhourSchema]
    }

},{timestamps : true})



export const Doctor = mongoose.model("Doctor",doctorSchema)