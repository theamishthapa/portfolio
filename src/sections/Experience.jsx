import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Smart Contents Nepal Pvt. Ltd",
      duration: "May 15, 2025 - Nov 7, 2025",
      description:
        "Developed and maintained responsive web applications using React.js and Tailwind CSS. Collaborated with the design and backend teams to implement modern UI/UX designs and ensure seamless integration with APIs.",
      highlights: [
        "Built reusable React components for scalable applications",
        "Implemented responsive designs with Tailwind CSS",
        "Debugged and optimized frontend performance",
        "Worked with REST APIs and state management",
      ],
    },
    {
      id: 2,
      role: "Freelance Project Lead",
      company: "UK-based Client",
      duration: "2025",
      description:
        "Led a team of 3 developers to design and build a complete website for a UK-based client. Managed project requirements, collaborated with team members, and delivered a production-ready site with modern design and functionality.",
      highlights: [
        "Led and coordinated a team of 3 developers",
        "Managed project timeline and client requirements",
        "Designed and implemented responsive website architecture",
        "Delivered high-quality, production-ready website",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-gray-950 py-40" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="mb-20" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-8xl font-semibold text-gray-300 mb-4">
            <span className="text-gray-200">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg ml-4">
            My professional journey in web development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="border border-gray-200 p-8 hover:border-gray-300 transition-colors duration-300"
              data-aos="fade-up"
              data-aos-delay={`${200 + index * 100}`}
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-lg mb-1">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gray-300 font-semibold mt-1">→</span>
                    <p className="text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
