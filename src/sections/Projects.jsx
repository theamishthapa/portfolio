import React from "react";
import EcommerceLogo from "../assets/images/ecommerce.png";
import RobotImage from "../assets/images/robot.png";
import WphLogo from "../assets/images/wph-logo.jpg";
import TicTacToe from "../assets/images/tic-tac-toe.png";
import Currency from "../assets/images/currency.jpg";

const projects = [
  {
    title: "WePlumbnHeat Client Project",
    description: "Professional plumbing & heating website for UK-based client",
    image: WphLogo,
    github: "#",
    demo: "https://weplumbnheat.co.uk/",
  },
  {
    title: "E-Commerce Store",
    description:
      "E-commerce platform with product catalog and cart system built on existing backend API",
    image: EcommerceLogo,
    github: "#",
    demo: "https://ecommerce-site-frontend-kiaw.onrender.com/",
  },
  {
    title: "Gwache Bot",
    description:
      "Interactive chatbot application with modern conversational UI",
    image: RobotImage,
    github: "#",
    demo: "https://gwachebot.vercel.app/",
  },
  {
    title: "Currency Converter",
    description: "Real-time currency conversion tool with live exchange rates",
    image: Currency,
    github: "#",
    demo: "https://currency-convertor-lime-tau.vercel.app/",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Interactive game with game logic and player tracking",
    image: TicTacToe,
    github: "#",
    demo: "https://tic-tac-toe-kappa-roan.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-20 md:py-40"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Heading */}
        <div
          className="mb-12 md:mb-16"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-semibold text-gray-300 mb-2 md:mb-4">
            <span className="text-gray-200">My Latest</span> Works
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-lg ml-0 sm:ml-4">
            A collection of my recent projects and deployments
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48 md:h-56 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x600?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white font-medium text-sm rounded hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Footer Buttons - Mobile */}
              <div className="md:hidden flex gap-3 p-4 border-t border-gray-800">
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-gray-800 text-white font-medium text-sm text-center rounded hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                )}
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-blue-600 text-white font-medium text-sm text-center rounded hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
