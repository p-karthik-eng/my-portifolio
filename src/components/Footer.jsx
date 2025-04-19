import React from 'react';
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from "../components/assests/2.png";

const Footer = () => {
  return (
    <footer className=" mt-20 md:mt-40 border-t border-gray-400 font-preahvihear bg-[#0f0b1d] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <img className="h-32 w-32 md:h-40 md:w-40 object-contain" src={Logo} alt="logo" />

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm -mt-20 -mb-40 py-4 px-4 mx-8 md:mx-56">
        © {new Date().getFullYear()} Karthik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
