import React from 'react'
import { FaReact,FaHtml5,FaNodeJs, } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react"

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    },
});

const Technologies = () => {
  return (
    <div className=' border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}
         className='my-20 text-center text-4xl '>Technologies</motion.h2>

        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className=' flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                <FaReact className=' text-7xl text-cyan-400'/>  
            </motion.div>
            
            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                <FaHtml5 className=' text-7xl text-orange-500'/>  
            </motion.div>

            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                <FaNodeJs className=' text-7xl text-green-500'/>  
            </motion.div>

            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                <DiMongodb className=' text-7xl text-green-800'/>  
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-600 p-3'>
                <IoLogoJavascript className=' text-7xl text-yellow-300'/>  
            </motion.div>

            <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate" 
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                <FaGitAlt className=' text-7xl text-orange-600'/>  
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-600 p-3'>
                < RiTailwindCssFill className=' text-7xl text-sky-600'/>  
            </motion.div>

        </motion.div>
            
    </div>
  )
}

export default Technologies
