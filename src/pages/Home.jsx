import React from 'react'    
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import CompanyLogo from '../components/CompanyLogo'
import Partners from '../components/Partners'
function Home() {
  return <>
  <Navbar/>
    <Hero />
    <Cards/>
    <CompanyLogo/>
    <Partners/>
    <Footer/>
    
  </>
}

export default Home
