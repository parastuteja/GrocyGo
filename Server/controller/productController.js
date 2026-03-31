import product from "../models/Product.js"
import { v2 as cloudinary } from 'cloudinary'
export const addProduct = async (req, res) => {
  try {
    console.log('hello')
    let productData = JSON.parse(req.body.productData)
console.log(productData);
    const images = req.files


    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: 'image'
        })
        return result.secure_url
      })
    )
    console.log('image added')
    await product.create({ ...productData, image: imagesUrl })

    res.json({ success: true })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
export const productList=async(req,res)=>{
try {
    const products =await product.find({})
    res.json({success:true},products)
} catch (error) {
    res.json({success:false,message:error.message})
}
}
export const productById=async(req,res)=>{
try {
    const {id}=req.body
    const product =await product.findById(id)
    res.json({success:true,product})
} catch (error) {
    res.json({success:false,message:error.message})
}
}
export const changeStock=async(req,res)=>{
try {
      const{id,inStock} =req.body
      await product.findByIdAndUpdate(id,{inStock})
      res.json({success:true,product})
} catch (error) {
    res.json({success:false,message:error.message})
}
}