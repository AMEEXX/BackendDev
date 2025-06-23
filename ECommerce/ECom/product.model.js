import mongooes from "mongoose"
import { Category } from "./category"


const orderItemsSchema = new mongooes.Schema({
    ProductId : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "ProductId"
    },quantity :{
        type : Number,
        required : true
    }
})

const productSchema = new mongooes.Schema({
    clothes :{
        type : String,
        number : Int16Arrayproduct
},
 price :{
    type : Number,
    default : 0
    
 } ,   Category:{  
    type : mongooes.Schema.Types.ObjectID,
    ref : "Category",
    required:True

 }, Owner :{
    type : mongooes.Schema.Types.ObjectId,
    ref : "User"
 }, orderItems : {
    type : [orderItemsSchema]
 }, address : {
    type : String ,
    required : true
 }, status : {
    type : String,
    enum : ["PENDING","CANCELLED","DELIVERED"],
    default : "PENDING"
 }
},
{timestamps : true})


export const product = mongooes.model("Category",productSchema)