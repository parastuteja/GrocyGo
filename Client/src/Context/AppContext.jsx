import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, dummyProducts } from "../assets/grocygoassets/assets";
export const AppContext=createContext()
export const AppContextProvider=({children})=>{
    const currency = import.meta.VITE_CURRENCY;
    const navigate=useNavigate()
    const[user,setUser]=useState(true)
    const [isSeller,setisSeller]=useState(false)
     const [showUserLogin,setShowUserLogin]=useState(false)
     const [products,setProducts]=useState([])

     const fetchProducts =()=>{
        setProducts(dummyProducts)
     }
     useEffect(()=>{
        setProducts(dummyProducts)
     },[])
const value={navigate,user,setUser,isSeller,setisSeller,products,currency}
return<AppContext.Provider value={value}>
    {children}
</AppContext.Provider>
}
export const useAppContext=()=>{
    return useContext(AppContext)
}