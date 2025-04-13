import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaCode } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-[#0f0b1d] px-4 py-20 font-preahvihear my-12'>
      {/* Section Title */}
      <div className='text-center text-3xl sm:text-4xl md:text-5xl mb-16 text-white font-preahvihear'>
        My <span className='text-purple-400'>Projects</span>
      </div>

      {/* Cards Container */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12 max-w-6xl mx-auto'>

        {/* Web Development Card */}
        <div className='w-full lg:w-1/2  bg-white/10 shadow-xl shadow-purple-900/30 rounded-2xl h-80 p-6 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50'>
        <div className=' absolute left-4 top-[-30px] rounded-full  h-16 w-16  backdrop-blur-lg bg-white/10 shadow-xl shadow-purple-900/30'>
        <FaCode  className='absolute left-5 top-5 text-2xl  text-purple-400'/>

        </div>

         <div>
          <p className='text-gray-400 pb-3'>10+ Projects</p>
           <h2 className='text-2xl  md:text-3xl text-gray-300  font-semibold mb-6'>
             Full Stack Web Development
          </h2>
          <p className='text-gray-400'>Building modern, scalable, and high-performance web applications using MERN Stack, NoSQL databases.</p>
          <button
            onClick={() => navigate('/projects')}
            className='flex items-center gap-2 border border-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition mt-4'
          >
            Explore <ArrowRight size={20} />
          </button></div>
        </div>

        {/* Android Development Card */}
        <div className='w-full lg:w-1/2 backdrop-blur-lg bg-white/10 shadow-xl shadow-purple-900/30 rounded-2xl h-80 p-6 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 hover:shadow-purple-500/50'>
        <div className=' absolute left-4 top-[-30px] rounded-full  h-16 w-16  backdrop-blur-lg bg-white/10 shadow-xl shadow-purple-900/30'>
        <FaMobileAlt className='absolute left-5 top-5 text-2xl  text-purple-400'/>

        </div>
<div>
  <p className='text-gray-400 pb-3'>Learning....</p>
          <h2 className='text-2xl md:text-3xl  text-gray-300  font-semibold mb-6'>
            Android Development
          </h2>
          <p className='text-gray-400'>Creating cross-platform mobile applications with Flutter, ensuring a seamless user experience on  Android.</p>
          <button
            onClick={() => navigate('/android-projects')}
            className='flex items-center gap-2 border border-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition mt-6'
          >
            Explore <ArrowRight size={20} />
          </button></div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
