import User from "../models/User.js"

export const updateCart=async()=>{
    try {
        const{userId,cartItems}=req.body

        await User.findByIdAndUpdate(userId,{cartItems})
        res.json({success:true,Message:'cart updated'}) 
    } catch (error) {
        console.log(error.Message)
            res.json({success:false,Message:error.Message}) 
    }
}