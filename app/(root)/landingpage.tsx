import Aboutus from '@/components/Aboutus'
import Contactus from '@/components/Contactus'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ourservices from '@/components/OurServices'
import React from 'react'

const Landingpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Ourservices />
      <Aboutus />
      <Contactus />
      <Footer />
    </>
  )
}

export default Landingpage
