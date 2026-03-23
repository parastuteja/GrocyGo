import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{tyepe:String ,required:true},
    description:{tyepe:Array ,required:true},
    price:{tyepe:Number ,required:true},
    offerPrice:{tyepe:Number ,required:true},
    Image:{tyepe:Array ,required:true},
    inStock:{type:Boolean,default:true}

},{timestamps:true})
const product= mongoose.models.product || mongoose.model('product',productSchema)
export default product