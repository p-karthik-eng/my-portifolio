import React from "react";
import skillImg from "../components/assests/skillImg.svg";
import Gradient2 from "../components/assests/gradient2.svg";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiC, SiMongodb, SiExpress } from "react-icons/si";

const techStack = [
  { icon: <FaReact size={30} color="#61DAFB" />, name: "React" },
  { icon: <SiC size={30} color="#00599C" />, name: "C" },
  { icon: <FaNodeJs size={30} color="#83CD29" />, name: "Node.js" },
  { icon: <FaJs size={30} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiExpress size={30} color="#404D59" />, name: "Express" },
  { icon: <SiMongodb size={30} color="#47A248" />, name: "MongoDB" },
];

const Skills = () => {
  return (
    <div className="bg-[#0f0b1d] pt-32 pb-32 ">
      {/* Header Section */}
      <div className="h-screen bg-[#0f0b1d] overflow-hidden">
        <div className="bg-[#0f0b1d] text-white text-center  text-2xl  md:text-4xl lg:text-5xl mt-4 items-center font-preahvihear">
        <div>My Dev <span className="text-purple-500"> Stack</span></div>
        </div>

        <div>{/* Main Section */}
        <div className="min-h-auto mt-12 bg-dark flex flex-col items-center justify-center space-y-80 relative">
          {/* Tech Icons Grid */}
          <div className="grid grid-cols-4 gap-10 md:grid-cols-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="w-10 h-10 flex flex-col items-center justify-center bg-[#1c132b] rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                {tech.icon}
              </div>
            ))}
          </div>
         
            {/* Add curved lines connecting tech icons to the center */}
            <svg className=" absolute w-full h-full" viewBox="0 0 1440 320">
            {techStack.map((tech, index) => {
              // Approximate positions based on a 6-column grid (md:grid-cols-6)
              const col = index % 6
              const row = Math.floor(index / 6);
              const xOffset = col * 80 + 40; // 80px gap + 40px center of icon
              const yOffset = row -30000; // 200px base y + row offset

              // Center of the large circle (adjust based on your layout)
              const centerX = 720;
              const centerY = 400;

              // Define a Bezier curve from center to tech icon position
              const controlX = centerX + (xOffset - centerX) / 2;
              const controlY = centerY - 100; // Curve upwards

              return (
                <path
                  key={`line-${index}`}
                  d={`M${centerX},${centerY} Q${controlX},${controlY} ${xOffset},${yOffset}`}
                  stroke="#A084E8" // Purple lines like in the image
                  strokeWidth="1"
                  fill="none"
                />
              );
            })}
          </svg>

          {/* Gradient Image */}
          <img
            src={Gradient2}
            alt="gradient"
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />

          {/* Large Circle in the Middle */}
          <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 md:h-48 md:w-48 lg:h-60 lg:w-60 bg-gradient-to-b from-[#301080] to-[#7840AD] rounded-full flex items-center justify-center relative">
              {/* Skill Image */}
              <img
                src={skillImg}
                alt="skill"
                className=" w-16 h-16 md:w-24 md:h-24 relative z-10"
              />
            </div>
          </div>
</div>
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
