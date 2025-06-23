import mongooes from "mongooes"
const ordersSchema = new mongooes.Schema ({
    orderPrice : {
        type : Number,
        required : true
    },customer : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "User"

    }
},{timestamps:true})


export const Order = mongooes.model("Order",ordersSchema)