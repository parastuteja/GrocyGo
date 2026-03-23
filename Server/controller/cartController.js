import User from "../models/User.js"

export const updateCart=async()=>{
    try {
        const{userId,cartItems}=req.body

        await User.findByIdAndUpdate(userId,{cartItems})
        resizeBy.json({success:false,Message:error.message}) 
    } catch (error) {
        
    }
}