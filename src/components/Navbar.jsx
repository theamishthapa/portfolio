import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white px-6 py-6 flex justify-between items-center z-50">
      {/* Left side - Logo/Name */}
      <h1 className="text-3xl font-bold">Amish Thapa</h1>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Right side - Nav Links */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-8 absolute md:static bg-black md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in ${
          isOpen ? "top-16" : "-top-64"
        } md:top-0`}
      >
        <li className="p-3 md:p-0 hover:text-blue-400 cursor-pointer">Home</li>
        <li className="p-3 md:p-0 hover:text-blue-400 cursor-pointer">About</li>
        <li className="p-3 md:p-0 hover:text-blue-400 cursor-pointer">
          Projects
        </li>
        <li className="p-3 md:p-0 hover:text-blue-400 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
