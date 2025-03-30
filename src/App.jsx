import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='bg-[#0f0b1d]'>
      <Navbar/>
<Hero/>
<Skills/>
<Projects/>
    </div>
  )
}

export default App