import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../Context/AppContext'

function BestSeller() {
  const {products}=useAppContext()
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>BestSeller</p>
        <div className='mt-5'>
<ProductCard product={products[0]}/>
        </div>
        </div>
  )
}

export default BestSeller