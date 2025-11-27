import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../Context/AppContext'

function SellerLogin() {
    const {isSeller,setIsSeller,navigate}=useAppContext()
    const [Email,setEmail]=useState('')
     const [Password,setPassword]=useState('')
     useEffect(()=>{
        if(isSeller){
            navigate('/seller')
        }
     },[isSeller])
     const onSubmitHandler =async(event)=>{
event.preventDefault()
setIsSeller(true);
     }
  return !isSeller &&(
    <form onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
<div className='flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lgshadow-xl border border-gray-200'>
    <p className='text-2xl font-medium m-auto'>
        <span className='text-primary'>
            Seller
        </span>
        Login
    </p>
    <div className='w-full'>
        <p>Email</p>
        <input onChange={(e)=>setEmail(e.target.value) } value={Email} type="email" placeholder='Type Here' 
        className='border border-gray-200 w-100 p-2 mt-1 outline-primary'
       required />

    </div>
      <div className='w-full'>
        <p>Password</p>
        <input onChange={(e)=>setPassword(e.target.value) } value={Password} type="password" placeholder='Type Here' 
         className='border border-gray-200 w-100 p-2 mt-1 outline-primary'
       required />

    </div>
    <button className='bg-primary text-white w-full py-2 rounded-md cursor-pointer' >Login</button>
</div>
    </form>
  )
}


export default SellerLogin