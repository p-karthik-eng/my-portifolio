import project1 from "../components/assests/project1.svg";

// Sample project data
const projectData = [
  {
    id: 1,
    title: "Example Project 1",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    imgSrc: project1,
  },
  {
    id: 2,
    title: "Example Project 2",
    description:
      "A platform to analyze GitHub repositories with insights into contributors, issues, and pull requests. Provides graphs and statistics for improved collaboration and performance analysis.",
    imgSrc: project1,
  },
  {
    id: 3,
    title: "Example Project 3",
    description:
      "An e-commerce web app that offers a seamless shopping experience with a secure checkout system and personalized recommendations for users.",
    imgSrc: project1,
  },
];

const Projects = () => {
  return (
    <div className="relative bg-[#0f0b1d] min-h-[350px] flex flex-col items-center justify-center px-4 sm:px-8 md:px-14 py-12 md:py-20 rounded-2xl shadow-xl space-y-20 md:space-y-28 lg:space-y-56 overflow-hidden">
      {/* Map through projects */}
      {projectData.map((project, index) => (
        <div
          key={project.id}
          className={`flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-5xl space-y-8 md:space-y-0 ${
            index % 2 === 1 ? "md:flex-row-reverse" : "" // Alternate layout for odd-indexed items
          }`}
        >
         {/* Left Section */}
<div
  className={`flex flex-col space-y-4 w-full md:w-3/5 relative z-10 ${
    index % 2 === 0 ? "text-left md:text-left md:-mr-96" : "text-right md:text-right md:-ml-[20%]"
  }`}
>
  <div className="text-sm text-purple-400 tracking-wide font-semibold">
    Featured Project
  </div>
  <div className="text-2xl sm:text-3xl md:text-3xl font-bold text-white">
    {project.title}
  </div>
  <div
    className="text-gray-300 text-sm sm:text-base leading-relaxed bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-lg p-4"
  >
    {project.description}
  </div>

  {/* Button */}
  <div
    className={`flex space-x-4 pt-4 ${
      index % 2 === 0 ? "justify-start" : "justify-end"
    }`}
  >
    <div className="text-sm text-white">
      <button className="bg-gradient-to-r from-[#301080] to-[#7840AD] rounded-lg py-1.5 px-4 hover:scale-105 transition duration-300">
        View Project
      </button>
    </div>
  </div>
</div>




          {/* Right Section - Project Mockup with Negative Padding & Hidden Overflow */}
          <div
            className={`relative bg-[#2B0B3A] hidden md:flex items-center justify-center w-full md:w-2/5 h-48 sm:h-60 md:h-72  rounded-xl overflow-hidden ${
              index % 2 === 0 ? "md:ml-8" : "md:mr-8"
            }`}
          >
            <div
              className={`absolute w-full h-full flex items-center justify-center ${
                index % 2 === 0
                  ? "-right-10 -bottom-10" // Even: negative padding to the right
                  : "-left-10 -bottom-10" // Odd: negative padding to the left
              }`}
            >

              <img
                src={project.imgSrc}
                alt="Project Mockup"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
