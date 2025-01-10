import React from 'react'
import {motion } from "motion/react";
import {BLOGS} from "../constants/index.js"

const BlogCard = ({blog}) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
      className="relative bg-transparent shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
        <p className="text-xs text-neutral-400 mb-2">{blog.date}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded bg-blue-700 px-2 py-1 text-xs font-medium text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={blog.link} // Assuming each blog has a link
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-300 text-lg"
        >
          Read More &rarr;
        </a>
      </div>
    </motion.div>
  )
};
const Blog=()=>{

    const sortedBlogs=BLOGS.sort((a,b)=> new Date(b.date)-new Date(a.date));
    return(
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl text-white">
                Blog
            </motion.h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 lg:px-20">
                    {sortedBlogs.map((blog,index)=>(
                        <BlogCard key={index} blog={blog} />
                    ))}
            </div>
        </div>
    );
};

export default Blog;
