import React from "react";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML & CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center">
        {/* Left: Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-8xl font-semibold text-gray-300 mb-12">
            <span className="text-gray-200">About</span> Me
          </h2>
          <p className="text-gray-400 text-lg mb-4 ml-4">
            Hi, I’m Amish Thapa, a passionate web developer focused on creating
            modern, responsive, and aesthetic web experiences. I enjoy turning
            ideas into reality through clean and efficient code.
          </p>
          <p className="text-gray-400 text-lg ml-4">
            I specialize in front-end development using React and Tailwind CSS,
            and I have experience with back-end development using Node.js and
            MongoDB.
          </p>
        </div>

        {/* Right: Skills */}
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-4xl font-semibold text-gray-300 mb-8">
            My Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-gray-200 text-gray-500 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
