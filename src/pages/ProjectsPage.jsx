import React from 'react';
import WriteOn from "../components/assests/writeOn.png";
import Rahul from "../components/assests/rahulPackaging.png";
import Locus from "../components/assests/locusweb.png";
import virtualR from "../components/assests/virtualr.png";

const projects = [
  {
    title: 'Write On',
    description: 'Book and Qoutes store',
    tags: ['UX Improvement', 'Visual Refresh', 'Performance Optimization', 'Feature Enhancement'],
    link: '/services/product-redesign',
    image: WriteOn,
    imageAlt: 'write on',
    reverse: false,
  },
  {
    title: 'Rahul Packaging',
    description: 'Define your product strateg',
    tags: ['Market Research', 'User Research', 'Product Strategy', 'Requirements Definition'],
    link: '/services/product-discovery',
    image: Rahul,
    imageAlt: 'Product Discovery',
    reverse: true,
  },
  {
    title: 'Locus Web ',
    description: 'Transform ideas into reality',
    tags: ['Ideation', 'Concept Development', 'Innovation', 'Strategic Planning'],
    link: '/services/concept-creation',
    image: Locus,
    imageAlt: 'Concept Creation',
    reverse: false,
  },
  {
    title: 'Work It',
    description: 'Optimize user experiences',
    tags: ['User Experience', 'Usability Testing', 'Analytics', 'Optimization'],
    link: '/services/ux-audit',
    image: '',
    imageAlt: 'UX Audit',
    reverse: true,
  },
  {
    title: 'Virtual Reality',
    description: 'Build applications without coding',
    tags: ['No-Code Development', 'Visual Development', 'Rapid Deployment', 'Business Solutions'],
    link: '/services/no-code',
    image: virtualR,
    imageAlt: 'No-code Solutions',
    reverse: false,
  },
  {
    title: 'Analytics',
    description: 'Create stunning, responsive websites',
    tags: ['UI/UX Design', 'Responsive Design', 'Visual Design', 'User Research'],
    link: '/services/website-design',
    image: '',
    imageAlt: 'Website Design',
    reverse: true,
  },
  {
    title: 'Chat Application',
    description: 'Custom web applications that solve real business problems',
    tags: ['UX Design', 'System Architecture', 'Frontend Development', 'Backend Integration'],
    link: '/services/web-app-design',
    image: '',
    imageAlt: 'Web App Design',
    reverse: false,
  },
 
];

const ProjectCard = ({ title, description, tags, link, image, imageAlt, reverse }) => {
  return (
    <a href={link} className="block">
      <div className="group relative bg-white/5 backdrop-blur-sm rounded-[32px] p-12 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} justify-between gap-12`}>
          <div className={`flex-1 max-w-2xl ${reverse ? 'md:pl-8' : 'md:pr-8'}`}>
            <h3 className="text-[32px] font-bold mb-4 text-white">{title}</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm text-gray-300 hover:bg-black/30 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <span>Learn more</span>
              <span className="text-xl">→</span>
            </div>
          </div>
          <div className="relative w-full md:w-[400px] h-[300px] rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 to-transparent rounded-[20px] group-hover:from-purple-400/20 transition-all duration-300"></div>
            {image ? (
              <img
                alt={imageAlt}
                src={image}
                className="object-cover !rounded-lg drop-shadow-2xl transform group-hover:rotate-2 transition-transform duration-500 absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-500 rounded-lg flex items-center justify-center text-white">
                Image Placeholder
              </div>
            )}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-purple-400/5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
      </div>
    </a>
  );
};

const ProjectsPage = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#0f0b1d' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              image={project.image}
              imageAlt={project.imageAlt}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
