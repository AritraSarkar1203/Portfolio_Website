import React from 'react'
import aboutpic from "../assets/about.jpeg"
import { motion } from "motion/react"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About Me</h2>
        <div className=' flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className=' flex items-center justify-center'>
                    <img  className='rounded-2xl' src={aboutpic}  alt=''/>
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'>
                <div className=' flex justify-center lg:justify-start'>
                    <p className='my-20 max-w-xl py-15'>My current status is as a Second-year Chemical Engineering B. Tech student at VNIT Nagpur. My interest also lies in Software Development and the IT industry. 
                        I'm developing my skills in Web Development and Compititive Programming. I enjoy photography as my hobbies. 
                        I'm eager to connect with professionals in the Tech Industry and explore opportunities for learning growth. </p>
                </div>
            </motion.div>
        </div>   
    </div>
  )
}

export default About;
