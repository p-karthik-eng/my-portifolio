import React from 'react';

const techStack = [
    { name: 'React', alt: 'React Logo', img: '/images/react.svg' },
  { name: 'NodeJS', alt: 'NodeJS Logo', img: '/images/nodejs.svg' },
  { name: 'MongoDB', alt: 'MongoDB Logo', img: '/images/postgres.svg' },
  { name: 'html', alt: 'html Logo', img: '/images/aws.svg' },
  { name: 'Flutter', alt: 'Flutter Logo', img: '/images/flutter.svg' },
  
  { name: 'CSS', alt: 'CSS Logo', img: '/images/figma.svg' },
  { name: 'Python', alt: 'Python Logo', img: '/images/python.svg' },
  { name: 'Java', alt: 'java Logo', img: '/images/hasura.svg' },
  { name: 'Java Script', alt: 'java script Logo', img: '/images/hasura.svg' },
  { name: 'Git', alt: 'Git Logo', img: '/images/git.svg' },

];

const ToolkitSection = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-6 font-preahvihear mt-4 md:mt-24 lg:mt-32">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <p className="text-gray-400 mb-4 text-md">Technology Stack</p>
        <h2 className="text-4xl text-white md:text-5xl font-bold leading-tight">
          My{' '}
          <span className="text-purple-400 relative">
            Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#b182e3]" />
          </span>
        </h2>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
        {techStack.map((tech, index) => (
          <div key={index} className="group relative">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all duration-300">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#b182e3]/5 rounded-full blur-md group-hover:bg-[#b182e3]/10 transition-all duration-300" />
                <img
                  src={tech.img}
                  alt={tech.alt}
                  className="relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                  width={48}
                  height={48}
                  style={{ color: 'transparent' }}
                />
              </div>
              <span className="text-gray-400 text-sm font-medium group-hover:text-purple-400 transition-colors duration-300">
                {tech.name}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-[#b182e3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Purple background blobs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#b182e3]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#b182e3]/5 rounded-full blur-3xl" />
    </div>
  );
};

export default ToolkitSection;
