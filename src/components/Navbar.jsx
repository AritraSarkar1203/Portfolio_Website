import React from 'react'
import { FaLinkedin,FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>

        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a
            href="https://www.linkedin.com/in/aritra-sarkar120320/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
          href="https://github.com/AritraSarkar1203"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-transform duration-300 transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/aritrasrkr_1105/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/sarkar13508"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition-transform duration-300 transform hover:scale-110"
        >
          <FaSquareXTwitter />
        </a>
        </div>

    </nav>
  );
};

export default Navbar;
