import express from 'express'
import { isSellerAuth, sellerLogin, sellerLogout } from '../controller/sellerController'
import authSeller from '../middleware/authSeller.js'
const sellerRouter =express.Router()
sellerRouter.post('/login',authSeller,sellerLogin)
sellerLogin.get('/isAuth',authSeller,isSellerAuth)
sellerLogin.get('/logout',authSeller,sellerLogout)

export default  sellerRouter