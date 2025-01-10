import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="flex items-center justify-center py-4 px-6 md:px-16 bg-opacity-80 bg-transparent shadow-lg backdrop-blur-md rounded-lg">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#technologies"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#blogs"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
           Blogs
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="absolute top-4 right-6 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg p-4 rounded-lg gap-4 mt-2">
          <a
            href="#home"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            About
          </a>
          <a
            href="#technologies"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Projects
          </a>
          <a
            href="#blogs"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Blogs
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:bg-white hover:text-black px-4 py-2 rounded transition-transform transform hover:scale-110"
          >
            Contact
          </a>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
