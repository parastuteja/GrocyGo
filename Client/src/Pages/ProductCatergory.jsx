import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/grocygoassets/assets'

function ProductCatergory() {
    const {products}=useAppContext()
    const {category}= useParams()
    const searchCatergory=categories.find((item)=>item.path.toLowerCase()===category)
    const
  return (
    <div>

    </div>
  )
}

export default ProductCatergory