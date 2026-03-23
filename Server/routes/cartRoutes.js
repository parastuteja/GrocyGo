import mongoose from "mongoose";
import authUser from "../middleware/authUser";
import { updateCart } from "../controller/cartController";

const cartRouter=mongoose.Router();
cartRouter.post('/update',authUser,updateCart)

export default cartRouter;