import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import ContactPage from './pages/Contactpage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'


const App = () => {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/skills" element={<SkillsPage/>} />
    <Route path="/Projects" element={<ProjectsPage/>} />
    <Route path="/contact" element={<ContactPage/>} />
    

   </Routes>
  )
}

export default App