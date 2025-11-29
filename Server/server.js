import express from 'express'
import cors from 'cors'
const app=express();
const port =process.env.PORT || 4000
const allowedOrgins=['http://localhost:5173']
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrgins,credentials:true}))

app.get('/',(req,res)=>res.send("Api is Working"))
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})