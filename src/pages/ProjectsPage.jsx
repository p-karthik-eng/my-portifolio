import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WriteOn from "../components/assests/writeOn.png";
import RahulPackaging from "../components/assests/rahulPackaging.png";
import Locus from "../components/assests/locusweb.png";
import virtualR from "../components/assests/virtualr.png";
import WorkIt from "../components/assests/workIt.png";
import Analytics from "../components/assests/analytics.png";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Write On",
    description: "Book and Qoutes store",
    tags: ["UX Improvement", "Visual Refresh", "Performance Optimization", "Feature Enhancement"],
    link: "https://writeon-planb.netlify.app/",
    image: WriteOn,
    imageAlt: "write on",
    reverse: false,
  },
  {
    title: "Rahul Packaging",
    description: "Rahul Packaging is website for company Website to describe about company and products",
    tags: ["Market Research", "User Research", "Product Strategy", "Requirements Definition"],
    link: "https://rahul-package.vercel.app/",
    image: RahulPackaging,
    imageAlt: "Product Discovery",
    reverse: true,
  },
  {
    title: "Locus Web",
    description: "This website is for promotion for a Locus app ",
    tags: ["Ideation", "Concept Development", "Innovation", "Strategic Planning"],
    link: "https://locus-official.vercel.app/",
    image: Locus,
    imageAlt: "Concept Creation",
    reverse: false,
  },
  {
    title: "Work It",
    description: "This website is the promotion for WorkIt app.",
    tags: ["User Experience", "Usability Testing", "Analytics", "Optimization"],
    link: "https://work-it-two.vercel.app/",
    image: WorkIt,
    imageAlt: "UX Audit",
    reverse: true,
  },
  {
    title: "Virtual Reality",
    description: "this is my react code.It shows about Virual Reality through Excellent UI.",
    tags: ["No-Code Development", "Visual Development", "Rapid Deployment", "Business Solutions"],
    link: "https://virtual-r-9.vercel.app/",
    image: virtualR,
    imageAlt: "No-code Solutions",
    reverse: false,
  },
  {
    title: "Analytics",
    description: "Create stunning, responsive websites",
    tags: ["UI/UX Design", "Responsive Design", "Visual Design", "User Research"],
    link: "https://analytics9.vercel.app/",
    image: Analytics,
    imageAlt: "Website Design",
    reverse: true,
  },
  {
    title: "Chat Application",
    description: "Custom web applications that solve real business problems",
    tags: ["UX Design", "System Architecture", "Frontend Development", "Backend Integration"],
    link: "/services/web-app-design",
    image: "",
    imageAlt: "Web App Design",
    reverse: false,
  },
];

const ProjectCard = ({ title, description, tags, link, image, imageAlt, reverse }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, x: reverse ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for tags
  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <motion.a
      href={link}
      className="block"
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="group relative bg-white/5 backdrop-blur-sm rounded-[32px] p-12 hover:bg-white/10 transition-all duration-300 cursor-pointer overflow-hidden">
      
        <div
          className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} justify-between gap-12`}
        >
          <div className={`flex-1 max-w-2xl ${reverse ? "md:pl-8" : "md:pr-8"}`}>
            <motion.h3
              className="text-[32px] font-bold mb-4 text-white"
              variants={textVariants}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-400 text-base leading-relaxed mb-8"
              variants={textVariants}
            >
              {description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              variants={tagVariants}
            >
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm text-gray-300 hover:bg-black/30 transition-all duration-300"
                  variants={tagVariants}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-purple-400"
              variants={textVariants}
            >
              <span>Learn more</span>
              <span className="text-xl">→</span>
            </motion.div>
          </div>
          <motion.div
            className="relative w-full md:w-[400px] h-[300px] rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-500"
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 to-transparent rounded-[20px] group-hover:from-purple-400/20 transition-all duration-300"></div>
            {image ? (
              <motion.img
                alt={imageAlt}
                src={image}
                className="object-cover !rounded-lg drop-shadow-2xl transform group-hover:rotate-2 transition-transform duration-500 absolute inset-0 h-full w-full"
                sizes="(max-width: 768px) 100vw, 400px"
                variants={imageVariants}
              />
            ) : (
              <motion.div
                className="absolute inset-0 bg-gray-500 rounded-lg flex items-center justify-center text-white"
                variants={imageVariants}
              >
                Image Placeholder
              </motion.div>
            )}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-purple-400/5 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"></div>
      </div>
    </motion.a>
  );
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for hero section
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <div className="py-20" style={{ backgroundColor: "#0f0b1d" }}>
        <nav className="flex justify-center space-x-2 text-sm">
          <ol className="flex space-x-2">
            <li className="breadcrumb-item">
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            <li className="breadcrumb-item text-gray-300">/</li>
            <li className="breadcrumb-item text-gray-300">Projects</li>
          </ol>
        </nav>
      <motion.section
        ref={ref}
        className="pt-32 pb-20 relative overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            className="absolute top-20 left-10 w-3 h-3 bg-purple-500"
            variants={dotVariants}
            whileHover={{ scale: 1.5, transition: { duration: 0.3 } }}
          />
          <motion.div
            className="absolute top-40 right-20 w-2 h-2 bg-purple-500 rounded-full"
            variants={dotVariants}
            initial="hidden"
            animate={isInView ? ["visible", "pulse"] : "hidden"}
          />
          <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
            <motion.div className="flex-1" variants={textVariants}>
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight mb-8"
                variants={textVariants}
              >
                
                <motion.span
                  className="text-white relative"
                  variants={textVariants}
                >
                  Web Development
                  <motion.div
                    className="absolute -right-12 top-0 text-4xl"
                    variants={dotVariants}
                  >
                    ✨
                  </motion.div>
                </motion.span>
               
              
                <br />
                <br />
                <motion.span
                  className="text-purple-500 relative"
                  variants={textVariants}
                >
                  Projects
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500/30"
                    variants={textVariants}
                  />
                  <motion.div
                    className="absolute -right-16 bottom-0"
                    variants={circleVariants}
                  >
                    <div className="w-32 h-32 rounded-full border-2 border-purple-500/20 transition-transform duration-300 hover:scale-110"></div>
                  </motion.div>
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-gray-400 text-lg max-w-2xl mb-12"
                variants={textVariants}
                transition={{ delay: 0.2 }}
              >
                Learn more about the team of professionals who care about your
                product as much as you do and the fields we can help you with.
              </motion.p>
            </motion.div>
            <motion.div
              className="relative w-[500px] h-[500px] flex-shrink-0 hidden lg:block"
              variants={circleVariants}
            >
              <motion.div
                className="absolute  -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-purple-400/20 to-transparent blur-2xl"
                variants={circleVariants}
              />
              <motion.div
                className="absolute   -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-purple-500/30"
                variants={circleVariants}
                whileHover={{ rotate: 10, transition: { duration: 0.5 } }}
              />
              <motion.div
                className="absolute top-16 left-16 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border-2 border-purple-400/20"
                variants={circleVariants}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
              />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,purple-500/5,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5, ease: "easeOut" } }}
        />
      </motion.section>
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
      <Footer/>
    </div>
  );
};

export default ProjectsPage;