import React from 'react'
import skills from "../components/assests/skill.svg";
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
  <div className='bg-[#0f0b1d] '>
      <nav className="flex justify-center space-x-2 text-sm pt-20">
          <ol className="flex space-x-2">
            <li className="breadcrumb-item">
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            <li className="breadcrumb-item text-gray-300">/</li>
            <li className="breadcrumb-item text-gray-300">Contact</li>
          </ol>
        </nav>
   <img src={skills} alt="" className=' mt-20 px-72'/>
   <Footer/>
  </div>
  )
}

export default SkillsPage