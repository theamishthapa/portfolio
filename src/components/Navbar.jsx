import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsDark(scrollPosition < windowHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const textColor = isDark ? "text-white" : "text-gray-900";
  const hoverColor = isDark ? "hover:text-blue-400" : "hover:text-blue-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent ${textColor} px-6 py-6 flex justify-between items-center z-50 transition-colors duration-300`}
    >
      {/* Logo */}
      <button
        onClick={scrollToTop}
        className={`text-3xl font-bold ${hoverColor} transition-colors duration-200 cursor-pointer`}
      >
        Amish Thapa
      </button>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8">
        {["home", "about", "projects", "contact"].map((id) => (
          <li
            key={id}
            onClick={() => scrollToSection(id)}
            className={`${hoverColor} cursor-pointer transition-colors duration-200`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </li>
        ))}
      </ul>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ scale: 0, opacity: 0, borderRadius: "50%" }}
            animate={{ scale: 1, opacity: 1, borderRadius: 0 }}
            exit={{ scale: 0, opacity: 0, borderRadius: "50%" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
            }}
            style={{ transformOrigin: "top right" }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white text-2xl space-y-8 z-50"
          >
            {["home", "about", "projects", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-gray-400 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}

            {/* Social Links */}
            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com/theamishthapa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/theamishthapa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/theamishthapa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:thapaamish805@gmail.com"
                className="hover:text-gray-400 transition"
                aria-label="Email"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-4xl hover:text-gray-400 transition"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
