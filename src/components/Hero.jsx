import React from "react";
import Arrow from "../components/assests/arrow.svg";
import avatar from "../components/assests/Hero.svg";
import gradient from "../components/assests/Gradient.png";

const Hero = () => {
  return (
    <div className="bg-[#0f0b1d] min-h-screen flex items-center justify-center px-4 sm:px-6 relative font-preahvihear mt-10">
      <div className="text-center relative">
        {/* Greeting Section */}
        <div className="text-md text-gray-400 pr-0 lg:pr-28 mb-6 sm:mb-8 md:mb-10 relative inline-block">
          <div>
            Hello! I Am{" "}
            <span className="text-purple-500 font-semibold">Karthik Putcha</span>
          </div>
        </div>

        {/* Avatar and Gradient Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 sm:mt-6 md:mt-8 relative mb-6 sm:mb-8 gap-4 sm:gap-8">
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Avatar */}
            <img
              src={avatar}
              alt="Avatar"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto relative z-10"
            />
            {/* Gradient Overlay */}
            <img
              src={gradient}
              alt="Gradient"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute top-0 left-0 z-0"
            />
            {/* Animated Arrow */}
            <img
              src={Arrow}
              alt="Arrow"
              className="
                w-40 h-40 sm:w-60 sm:h-60 md:w-56 md:h-48 lg:w-96 lg:h-56 
                hidden sm:block
                md:absolute md:top-[-140px] md:right-[-40px]
                lg:absolute lg:top-[-150px] lg:right-[-100px]
                z-0
                animate-slideFloat sm:animate-floatSlow
              "
            />
          </div>

          {/* Designer Tagline */}
          <div className="text-center md:text-left">
            <h2 className="text-md sm:text-lg text-gray-300">
              A <span className="text-purple-400">Developer</span> who
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-2">
              Judges a book by its{" "}
              <span className="relative text-purple-500">
                cover
                <span className="absolute -bottom-1 left-0 h-1 bg-purple-500 animate-slideInUnderline"></span>
              </span>
              ...
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-5">
              Because if the cover doesn’t impress you, what else can?
            </p>
          </div>
        </div>

        {/* Software Engineer Title Section */}
        <div className="text-center md:text-left mt-4 sm:mt-6 md:mt-8">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold">
            I’m a <span className="text-purple-400">MERN Stack Developer</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Currently, I’m studying in{" "}
            <span className="text-blue-400 inline-flex items-center gap-1">
              RGUKT IIT Nuzvid
            </span>
          </p>

          {/* Description */}
          <p className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm max-w-lg mx-auto md:mx-0 leading-relaxed px-2 sm:px-0">
            "I’m Karthik Putcha, an aspiring web developer passionate about creating responsive and dynamic websites. I’m currently exploring the world of frontend and backend technologies, eager to learn and build projects that enhance user experiences. As I continue to grow in this field, I’m excited to take on challenges and bring creative ideas to life."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
