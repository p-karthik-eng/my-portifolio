import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="text-white mt-10 font-preahvihear px-6 sm:px-12 lg:px-60">
      <div className="text-left max-w-3xl">
        {/* Heading */}
        <div className="text-4xl sm:text-5xl text-purple-500 text-center sm:text-left">
          Contact
        </div>

        {/* Description */}
        <div className="mt-6 sm:mt-12 text-base sm:text-lg tracking-wide leading-relaxed text-center sm:text-left">
          I'm currently looking to join a cross-functional team that values improving people's lives
          through accessible design. Or have a project in mind? Let's connect.
        </div>

        {/* Email Link */}
        <div className="mt-8 sm:mt-12 text-center sm:text-left">
          <a
            href="mailto:karthikputcha123@gmail.com"
            className="hover:text-purple-500 text-lg sm:text-xl transition duration-300"
          >
            karthikputcha123@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="text-xl mt-8 sm:mt-10 flex justify-center sm:justify-start gap-8 sm:gap-11">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition duration-300"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
