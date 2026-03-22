import express from 'express'
import { register } from '../controller/userController.js';
const userRouter =express.Router();
console.log('file loaded')
userRouter.post('/register',register)

export default userRouter