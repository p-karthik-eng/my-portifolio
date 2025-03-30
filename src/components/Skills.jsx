import React from "react";
import skillImg from "../components/assests/skillImg.svg";
import Gradient2 from "../components/assests/gradient2.svg";
import {
  FaReact,
  FaNodeJs,
  FaJs,
} from "react-icons/fa";
import {
  SiC,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

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
    <div className="bg-[#0f0b1d] pt-32 pb-32">
      {/* Header Section */}
      <div className="h-screen bg-[#0f0b1d] overflow-hidden">
        <div className="bg-[#0f0b1d] text-white text-center text-3xl mt-4 items-center font-preahvihear">
          <div>
            I'm currently looking to join a{" "}
            <span className="text-purple-400">cross functional</span> team
          </div>
          <div className="text-xl mt-4">
            that values improving people's lives through accessible design
          </div>
        </div>

        {/* Main Section */}
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

          {/* Gradient Image */}
          <img
            src={Gradient2}
            alt="gradient"
            className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />

          {/* Large Circle in the Middle */}
          <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-60 h-60 bg-gradient-to-b from-[#301080] to-[#7840AD] rounded-full flex items-center justify-center relative">
              {/* Skill Image */}
              <img
                src={skillImg}
                alt="skill"
                className="w-24 h-24 relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
