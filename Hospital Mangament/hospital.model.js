import mongoose from "mongoose"


const hospitalSchema = new mongoose.Scheme({
    name : {
        type : String,
        required  : true
    }, address : {
        type : String,
        required : true
    }, city : {
        type : String,
        required : true
    }, pincode : {
        type : String,
        required : true
    }, specilizaedin : {
        type : String,
        enum : ["Heart","Skin"]
    }
    },
{})



export const Hospital = mongoose.model("Hospital",hospitalSchema)