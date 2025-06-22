import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-[#14001d]'>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default page