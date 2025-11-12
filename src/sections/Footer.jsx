import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Left: About */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">Amish Thapa</h3>
          <p className="text-gray-400">
            I’m a web developer building modern, responsive, and aesthetic web
            experiences. Let’s connect and create something amazing.
          </p>
        </div>

        {/* Center: Links */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#hero" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#quote" className="hover:text-white transition">
                Quote
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <p className="text-gray-400">Email: thapaamish805@gmail.com</p>
          <p className="text-gray-400">Phone: +977-9848830447</p>
        </div>
      </div>

      {/* Social Footer */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center flex-col md:flex-row">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Amish Thapa. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
