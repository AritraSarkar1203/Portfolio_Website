import React from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "motion/react";

const Card = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative bg-transparent shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded bg-purple-700 px-2 py-1 text-xs font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link} //  each project has a link
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 text-purple-500 hover:text-purple-300 text-2xl"
        >
          &rarr;
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-20">
        {PROJECTS.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
