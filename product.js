// Inside define for model and schema
const mongoose=require('mongoose')
//for schema
const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

//for model and here to export
module.exports=mongoose.model('products',productSchema)