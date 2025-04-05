import React from 'react'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='bg-[#0f0b1d]'>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Home