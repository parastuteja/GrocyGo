import jwt from'jsonwebtoken'
import { envVal } from '../utils/env.js'

const SELLER_EMAIL = envVal(process.env.SELLER_EMAIL)
const SELLER_PASSWORD = envVal(process.env.SELLER_PASSWORD)

export const sellerLogin =async(req,res)=>{
   try {
     const{email,password}=req.body
    if(password===SELLER_PASSWORD&& email===SELLER_EMAIL){
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'7d'})
         res.cookie("sellerToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({success:true,message:'Logged In'})
    }else{
        return res.json({success:false,message:'Invalid Credentials'})
    }
   } catch (error) {
    console.log(error.message)
    res.json({success:false,message: error.message})
   }
   
}
export const isSellerAuth = async (req, res) => {
  try {
    const { userId } = req.body;
    return res.json({ success: true});

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({ success: true, message: "Logged Out" });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};