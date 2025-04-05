import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between h-16 px-4 md:px-20 text-white items-center bg-[#1A0B2E] font-preahvihear">
      <h1 className="w-full text-3xl font-bold">Karthik</h1>
      <ul className="hidden md:flex">
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/">Home</Link>
  </li>
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/about">About</Link>
  </li>
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/skills">Skills</Link>
  </li>
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/projects">Projects</Link>
  </li>
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/contact">Contact</Link>
  </li>
</ul>

      <div className="cursor-pointer block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Overlay for mobile menu */}
      {nav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={handleNav}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[60%] border-r border-gray-900 h-full bg-[#1A0B2E] z-20 ease-in-out duration-500 ${
          nav ? "" : "left-[-100%]"
        }`}
      >
        <h1 className="w-full text-3xl font-bold m-4">Karthik</h1>
        <ul className="pt-24 uppercase">
  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
    <Link to="/" onClick={handleNav}>Home</Link>
  </li>
  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
    <Link to="/about" onClick={handleNav}>About</Link>
  </li>
  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
    <Link to="/skills" onClick={handleNav}>Skills</Link>
  </li>
  <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
    <Link to="/projects" onClick={handleNav}>Projects</Link>
  </li>
  <li className="p-4 cursor-pointer hover:text-[#7127BA]">
    <Link to="/contact" onClick={handleNav}>Contact</Link>
  </li>
</ul>

      </div>
    </div>
  );
};

export default Navbar;
