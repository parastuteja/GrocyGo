import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categories from '../Components/Categories'
import BestSeller from '../Components/BestSeller'
import BottomBanner from '../Components/BottomBanner'
import NewsLetter from '../Components/newsLetter'
import Footer from '../Components/Footer'
import Login from '../Components/Login'

function Home() {
  return (
    <div className='mt-10 ml-10 mr-10'>
<MainBanner/>
<Categories/>
<BestSeller/>
<BottomBanner/>
<NewsLetter/>


    </div>
  )
}

export default Home