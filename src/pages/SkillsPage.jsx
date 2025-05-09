import React from 'react';
import skills from "../components/assests/skill.svg";
import Footer from '../components/Footer';
import Skills from '../components/Skillsdiv';

const SkillsPage = () => {
  return (
    <div className='bg-[#0f0b1d] min-h-screen'>
      <nav className="flex justify-center space-x-2 text-sm pt-20">
        <ol className="flex space-x-2">
          <li className="breadcrumb-item">
            <a href="/" className="text-white hover:underline">Home</a>
          </li>
          <li className="breadcrumb-item text-gray-300">/</li>
          <li className="breadcrumb-item text-gray-300">Skills</li>
        </ol>
      </nav>

      <Skills/>

      <Footer />
    </div>
  );
}

export default SkillsPage;
