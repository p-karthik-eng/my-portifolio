import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-between h-16 px-4 md:px-20 text-white items-center bg-[#1A0B2E] font-preahvihear">
      <h1 className="w-full text-3xl font-bold">Karthik</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#7127BA]">Home</li>
        <li className="p-4 cursor-pointer hover:text-[#7127BA]">about</li>
        <li className="p-4 cursor-pointer hover:text-[#7127BA]">skills</li>
        <li className="p-4 cursor-pointer hover:text-[#7127BA]">projects</li>
        <li className="p-4 cursor-pointer hover:text-[#7127BA]">Contact</li>
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
            Home
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
            about
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
            skills
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer hover:text-[#7127BA]">
            projects
          </li>
          <li className="p-4 cursor-pointer hover:text-[#7127BA]">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
