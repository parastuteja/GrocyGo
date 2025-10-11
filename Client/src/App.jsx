import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const isSellerPath =useLocation().pathname.includes('seller')
  return (
    <>
   <Navbar/>
   <div className={`${isSellerPath ? '':'px-6 md:px-16 lg:px-24 xl:px-32'}`}></div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
  
   </>
  )
}

export default App