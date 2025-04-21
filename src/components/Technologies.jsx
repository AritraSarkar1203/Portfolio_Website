import React from 'react';
import { FaReact, FaHtml5, FaNodeJs, FaGitAlt, FaPython, FaDocker } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";

const Technologies = () => {
  // Tech categories with their respective icons
  const techStack = [
    {
      category: "Frontend",
      techs: [
        { icon: FaReact, color: "text-cyan-400", name: "React" },
        { icon: FaHtml5, color: "text-orange-500", name: "HTML5" },
        { icon: IoLogoJavascript, color: "text-yellow-300", name: "JavaScript" },
        { icon: SiTypescript, color: "text-blue-500", name: "TypeScript" },
        { icon: RiTailwindCssFill, color: "text-sky-600", name: "Tailwind" },
        { icon: SiNextdotjs, color: "text-white", name: "Next.js" },
      ]
    },
    {
      category: "Backend",
      techs: [
        { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
        { icon: DiMongodb, color: "text-green-600", name: "MongoDB" },
        { icon: FaPython, color: "text-blue-500", name: "Python" },
      ]
    },
    {
      category: "Tools",
      techs: [
        { icon: FaGitAlt, color: "text-orange-600", name: "Git" },
        
      ]
    }
  ];

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          variants={headingVariants}
          initial="hidden"
          whileInView="show" 
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-16">
          {techStack.map((category, index) => (
            <div key={index} className="mb-12">
              <motion.h3 
                variants={categoryVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-2xl font-medium mb-8 text-white/80 border-l-4 border-purple-500 pl-4"
              >
                {category.category}
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {category.techs.map((tech, techIndex) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={techIndex}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <div className="bg-transparent rounded-xl border border-neutral-700 p-6 flex flex-col items-center justify-center gap-3 h-full transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                        <motion.div
                          animate={{ 
                            y: [0, -5, 0],
                            transition: {
                              duration: 2 + techIndex * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <Icon className={`text-5xl ${tech.color} transition-all duration-300 group-hover:scale-110`} />
                        </motion.div>
                        <p className="text-sm font-medium text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;