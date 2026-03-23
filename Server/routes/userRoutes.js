import express from 'express'
import { isAuth, login, logoutUser, register } from '../controller/userController.js';
import authUser from '../middleware/authUser.js';
const userRouter =express.Router();
console.log('file loaded')
userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.post('/logout',logoutUser,authUser)
userRouter.get('/isAuth',authUser,isAuth)

export default userRouter