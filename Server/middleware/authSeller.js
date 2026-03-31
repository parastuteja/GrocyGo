import jwt from 'jsonwebtoken'
import { envVal } from '../utils/env.js'

 const authSeller =async(req,res,next)=>{
const {sellerToken}=req.cookies
if(!sellerToken){
    return res.json({success:false,message:'not authorised'})
}
try{
const tokenDecode= jwt.verify(sellerToken,process.env.JWT_SECRET)
if(tokenDecode.email===envVal(process.env.SELLER_EMAIL)){
    next();
}
else{
    return res.json({success:false,message:'Not Authorised'})
}


}catch(error){
res.json({success:false,message:error.message})
}
 }
 export default authSeller