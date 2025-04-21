import React, { useEffect } from 'react';
import profilepic from '../assets/profilepic.jpg';
import { motion, useAnimation } from "framer-motion";
import { FiDownload, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 }
    }
  };

  const scrollToNextSection = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const cvPath = "/public/Aritra Sarkar.pdf";
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Aritra Sarkar.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen flex items-center relative bg-transparent overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="overflow-hidden mb-2">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-700 mb-6">
                Portfolio
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Aritra Sarkar
            </motion.h1>
            
            <motion.div variants={itemVariants}>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-light mb-6 bg-gradient-to-r from-pink-500 via-slate-500 to-purple-500 bg-clip-text text-transparent">
                An aspiring developer
              </span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-xl mb-8 leading-relaxed">
              I'm a web developer passionate about solving problems and creating efficient solutions. 
              I love learning new technologies and applying them to build user-friendly applications. 
              My aim is to deliver great user experiences through creativity and logic.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button 
                onClick={handleDownload}
                className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                Download CV
              </button>
              
              <button 
                onClick={scrollToNextSection}
                className="flex items-center gap-2 bg-transparent border border-gray-300 hover:border-purple-500 text-gray-400 hover:text-purple-600 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <FiChevronDown className="animate-bounce" />
              </button>
            </motion.div>
          </motion.div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
              className="relative"
            >
              {/* Subtle glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 scale-110"></div>
              
              {/* Profile image with border */}
              <div className="relative rounded-full p-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                <div className="bg-white rounded-full p-1">
                  <img
                    src={profilepic}
                    alt="Aritra Sarkar"
                    className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;