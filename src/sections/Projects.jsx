import React from "react";

const projects = [
  {
    title: "Project 1",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80&grayscale",
    github: "#",
    demo: "#",
  },
  {
    title: "Project 2",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80&grayscale",
    github: "#",
    demo: "#",
  },
  {
    title: "Project 3",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80&grayscale",
    github: "#",
    demo: "#",
  },
  {
    title: "Project 4",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=800&q=80&grayscale",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-6xl font-semibold text-gray-400 mb-16">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 ${
                index % 2 !== 0 ? "md:mt-12" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
