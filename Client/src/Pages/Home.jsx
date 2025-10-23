import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categories from '../Components/Categories'
import BestSeller from '../Components/BestSeller'
function Home() {
  return (
    <div className='mt-10 ml-10 mr-10'>
<MainBanner/>
<Categories/>
<BestSeller/>
    </div>
  )
}

export default Home