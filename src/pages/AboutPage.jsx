import React from "react";
import Karthik from "../components/assests/karthik1.png";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import gradient from "../components/assests/gradient2.svg";
import Footer from "../components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <section className="relative text-white bg-[#0f0b1d] font-preahvihear overflow-hidden mx-8">
      
      {/* Gradient Behind Heading */}
      <img
        src={gradient}
        alt="background gradient"
        className="absolute top-10 left-1/2 transform -translate-x-1/2 opacity-30 w-[500px] h-auto z-0 pointer-events-none"
      />

      <section className="relative text-center py-20 z-10">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-2">Hi, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
            <span className="text-white">Karthik Putcha</span>
          </h1>
          <nav className="flex justify-center space-x-2 text-sm">
            <ol className="flex space-x-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-300">About</li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="h-[140px] lg:h-[70px]"></div>

      {/* First Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-semibold mb-0">
              I'm currently working as a{" "}
              <span className="text-purple-400">freelancer & full-stack developer</span>
            </h3>
            <div className="h-5 lg:h-2.5"></div>
            <p className="mb-0">
              Passionate about building scalable web & mobile applications. I specialize in Full-Stack Development and MERN stack Development.
              My expertise extends to <strong>Flutter</strong>, ensuring seamless, high-performance applications.
            </p>
          </div>
          <div className="lg:w-5/12 lg:ml-auto self-end mt-6 lg:mt-10">
            <p className="mb-0">
              I thrive on problem-solving and creating innovative solutions. Whether it's <strong>backend or frontend development</strong>,
              I enjoy working on projects that push the boundaries of technology.
            </p>
          </div>
        </div>
        <div className="h-14 lg:h-8"></div>
      </div>

      {/* Profile Summary */}
      <div className="container mx-auto px-4   mt-2 md:mt-20">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img src={Karthik} alt="About Me" className="w-full h-full" />
            </div>
            <div className="h-8 lg:h-6"></div>
          </div>
          <div className="lg:w-5/12 lg:ml-auto">
            <h4 className="text-3xl font-semibold mb-4">In Summary</h4>
            <ul className="space-y-4">
              <li><p className="capitalize">Full Name</p><h5 className="text-lg font-semibold">Karthik Putcha</h5></li>
              <li><p className="capitalize">Nationality</p><h5 className="text-lg font-semibold">Indian</h5></li>
              <li><p className="capitalize">Current Location</p><h5 className="text-lg font-semibold">India</h5></li>
              <li><p className="capitalize">Education</p><h5 className="text-lg font-semibold">Bachelor's in Computer Science Engineering</h5></li>
              <li><p className="capitalize">Skills & Expertise</p><h5 className="text-lg font-semibold">Full-Stack Development, MERN Stack, App Development</h5></li>
              <li><p className="capitalize">Hobbies</p><h5 className="text-lg font-semibold">Drawing, Exploring Tech, Listening to Music</h5></li>
              <li><p className="capitalize">Interests</p><h5 className="text-lg font-semibold">Web & Mobile Dev, Cloud, AI/ML, Cybersecurity</h5></li>
              <li><p className="capitalize">Email</p><h5 className="text-lg font-semibold text-purple-400">karthikputcha123@gmail.com</h5></li>
            </ul>
            <button
              onClick={handleNavigate}
              className='mt-6 flex items-center gap-2 border border-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition'
            >
              Hire me <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[150px] lg:h-[80px]"></div>

      {/* Education Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              I'm great in what I do<br />
              <span className="text-purple-400">I'm loving it</span>
            </h2>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold border-b-2 pb-2 mb-6">Education</h3>

            <div className="mb-5 p-4 border-l-4 border-purple-400 bg-[#1a132d] rounded">
              <p className="font-bold">Rajiv Gandhi University Of Knowledge Technologies, Nuzvid</p>
              <h4 className="mt-1 font-normal">CSE (2024 - 2027)</h4>
            </div>
            <div className="mb-5 p-4 border-l-4 border-purple-400 bg-[#1a132d] rounded">
              <p className="font-bold">Intermediate (PUC)</p>
              <h4 className="mt-1 font-normal">MPC (2022 - 2024)</h4>
            </div>
            <div className="mb-5 p-4 border-l-4 border-purple-400 bg-[#1a132d] rounded">
              <p className="font-bold">Sri Chaitanya School</p>
              <h4 className="mt-1 font-normal">Techno Batch (2016 - 2021)</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
    
  );
};

export default AboutPage;
