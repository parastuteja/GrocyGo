import React from 'react'
import { assets } from '../assets/grocygoassets/assets'

function mainBanner() {
  return (
    <div className='relative'>
        <img src={assets.main_banner_bg} alt="" className='w-full hidden md:block' />
        <img src={assets.main_banner_bg_sm} alt="" className='w-full  md:hidden' />
    </div>
  )
}

export default mainBanner