import React from 'react';
import skills from "../components/assests/skill.svg";
import Footer from '../components/Footer';

const SkillsPage = () => {
  return (
    <div className='bg-[#0f0b1d] min-h-screen'>
      <nav className="flex justify-center space-x-2 text-sm pt-20">
        <ol className="flex space-x-2">
          <li className="breadcrumb-item">
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
          <li className="breadcrumb-item text-gray-300">/</li>
          <li className="breadcrumb-item text-gray-300">Contact</li>
        </ol>
      </nav>

      <div className='flex justify-center mt-20 px-4 md:px-20'>
        <img 
          src={skills} 
          alt="Skills" 
          className='w-full max-w-4xl h-auto' 
        />
      </div>

      <Footer />
    </div>
  );
}

export default SkillsPage;
