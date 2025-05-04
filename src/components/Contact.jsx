import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <div className="text-white mt-10 font-preahvihear px-6 sm:px-12 lg:px-60">
      <div className="text-left max-w-3xl">
        <div className="text-4xl sm:text-5xl text-purple-500 text-center sm:text-left">Contact</div>

        <div className="mt-6 sm:mt-12 text-base sm:text-lg tracking-wide leading-relaxed text-center sm:text-left">
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design. Or have a project in mind? Let's connect.
        </div>

        <div className="mt-8 sm:mt-12 text-center sm:text-left">
          <a
            href="mailto:karthikputcha123@gmail.com"
            className="hover:text-purple-500 text-lg sm:text-xl transition duration-300"
          >
            karthikputcha123@gmail.com
          </a>
        </div>

        <button
          onClick={handleNavigate}
          className='mt-6 flex items-center gap-2 border border-purple-900 text-white px-5 mx-20 py-2 rounded-full hover:bg-purple-600 transition'
        >
          Hire me <ArrowRight size={20} />
        </button>

      
      </div>
    </div>
  );
};

export default Contact;
