import React from 'react';
import Skills from "../components/assests/skill.svg";

const SkillsImages = () => {
  return (
    <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <img 
        src={Skills} 
        alt="Skills"  
        className="w-full max-w-5xl h-auto mx-auto"
      />
    </div>
  );
};

export default SkillsImages;
