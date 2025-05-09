import React from "react";

const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Vercel", img: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico" },
  { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Supabase", img: "https://avatars.githubusercontent.com/u/54469796?s=200&v=4" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const Skills = () => {
  return (
    
    <div
      className="min-h-screen py-16 px-6 md:px-20 bg-cover bg-center font-preahvihear"
     
      id="skills"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-2xl">
      <h1 className="text-4xl  text-center mb-12 text-white drop-shadow-lg">
          My Technical stack
        </h1>
        <h2 className="text-4xl  text-center mb-12 text-purple-500 drop-shadow-lg">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 h-32 w-32 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-2"
              />
              <p className="text-center text-white font-medium text-sm">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
