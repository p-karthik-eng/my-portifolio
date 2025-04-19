import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from "../components/assests/2.png";

const Footer = () => {
  return (
    <footer className="mt-20 md:mt-40 border-t border-gray-400 font-preahvihear bg-[#0f0b1d] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center md:gap-6 gap-4">
        {/* Logo */}
        <img
          className="h-24 w-24 md:h-40 md:w-40 object-contain"
          src={Logo}
          alt="logo"
        />

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-6 text-xl md:text-2xl">
          
        
          <a href="https://github.com/p-karthik-eng" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/karthik-putcha-6bb6a2325/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs md:text-sm mt-4 mb-8 md:mb-20 px-4">
        © {new Date().getFullYear()} Karthik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
