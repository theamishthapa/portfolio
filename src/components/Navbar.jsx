import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Change this threshold based on where your sections are
      // If scroll position is in top section (dark), keep white text
      // Otherwise switch to dark text for light backgrounds
      if (scrollPosition < windowHeight * 0.8) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const textColor = isDark ? "text-white" : "text-gray-900";
  const hoverColor = isDark ? "hover:text-blue-400" : "hover:text-blue-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent ${textColor} px-6 py-6 flex justify-between items-center z-50 transition-colors duration-300`}
    >
      {/* Left side - Logo/Name */}
      <button
        onClick={scrollToTop}
        className={`text-3xl font-bold ${hoverColor} transition-colors duration-200 cursor-pointer`}
      >
        Amish Thapa
      </button>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-2xl`}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Right side - Nav Links */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-8 absolute md:static ${
          isDark ? "bg-black" : "bg-white"
        } md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in ${
          isOpen ? "top-16" : "-top-64"
        } md:top-0`}
      >
        <li
          className={`p-3 md:p-0 ${hoverColor} cursor-pointer transition-colors duration-200`}
        >
          Home
        </li>
        <li
          className={`p-3 md:p-0 ${hoverColor} cursor-pointer transition-colors duration-200`}
        >
          About
        </li>
        <li
          className={`p-3 md:p-0 ${hoverColor} cursor-pointer transition-colors duration-200`}
        >
          Projects
        </li>
        <li
          className={`p-3 md:p-0 ${hoverColor} cursor-pointer transition-colors duration-200`}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
