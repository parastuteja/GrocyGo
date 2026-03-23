import { upload } from "../configs/multer";
import express from express
import authSeller from "../middleware/authSeller";
import { addProduct, changeStock, productById, productList } from "../controller/productController";
const productRouter=express.Router();
productRouter.post('/add',upload.array([images]),authSeller,addProduct)
productRouter.get('/list',productList)
productRouter.get('/id',productById)
productRouter.post('/stock',authSeller,changeStock)
export default productRouter
