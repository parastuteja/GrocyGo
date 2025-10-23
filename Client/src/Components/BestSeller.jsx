import React from 'react'
import ProductCard from './ProductCard'

function BestSeller() {
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>BestSeller</p>
        <div className='mt-5'>
<ProductCard/>
        </div>
        </div>
  )
}

export default BestSeller