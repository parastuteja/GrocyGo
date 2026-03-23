import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoutes.js';
import sellerRouter from './routes/sellerRoutes.js';
import connectCloudinary from './configs/cloudinary.js';

const app= express();
const AllowedOrigins=['http://localhost:5173']
const port= process.env.PORT || 4000
await connectDB()
await connectCloudinary()
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:AllowedOrigins, credentials:true}))


app.get('/',(req,res)=>res.send("API is Working"))
app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})