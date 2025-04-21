import React from 'react'
import profilepic from '../assets/profilepic.jpg';
import { motion } from "framer-motion"  // Corrected the import for framer-motion

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 70, damping: 20, delay: delay },
  },
});

const Hero = () => {
  const scrollToNextSection = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const cvPath = "/public/Aritra Sarkar.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Aritra Sarkar.pdf"; // This will be the downloaded file name
    link.click();
  };

  return (
    <div className="border-b border-neutral-900 pb-10 py-12 lg:mb-35">
      <div className="flex flex-wrap pt-20">
        <div className="w-full lg:w-1/2 px-3">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16"
            >
              Aritra Sarkar
            </motion.h1>
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="py-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              An aspiring developer
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-8 font-light tracking-normal text-center sm:text-left"
            >
              I'm a web developer passionate about solving problems and creating efficient solutions. 
              I love learning new technologies and applying them to build user-friendly applications. 
              My aim is to deliver great user experiences through creativity and logic.
            </motion.p>
            <div className="flex gap-6 py-4">
              <motion.button
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-purple-500 text-purple-500 py-2 px-6 rounded-full text-xl transition-all duration-300 hover:bg-purple-500 hover:text-white"
                onClick={handleDownload}
              >
                Download CV
              </motion.button>
              <motion.button
                onClick={scrollToNextSection}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 1.2 }}
                whileHover={{ scale: 1.1, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full text-xl transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                Scroll Down
              </motion.button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center py-14">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 1.5 }}
            src={profilepic}
            alt="profile picture"
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};


export default Hero;
