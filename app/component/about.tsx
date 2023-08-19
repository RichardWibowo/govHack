'use client'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial = {{x : -200, opacity : 0}}
            whileInView = {{ x : 0, opacity : 1}}
            viewport = {{once : true}}
            transition = {{duration : 1.7}}
    className='h-screen flex flex-col relative text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
    mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase 
        tracking-[20px] text-gray-500 text-2xl'>ABOUT</h3>
        
        <motion.img
            initial = {{x : -200, opacity : 0}}
            whileInView = {{ x : 0, opacity : 1}}
            viewport = {{once : true}}
            transition = {{duration : 1.7}}
            src = "https://www.voicesofyouth.org/sites/voy/files/images/2021-04/earth_2.gif"
            className = 'rb-10 md:rb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
        />
        <div className=' px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            here is a 
                <span className='underline'> little background</span>
        </h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tempor lacus ac ultrices. Mauris eget rutrum mauris, quis egestas ante. Nullam pulvinar maximus risus vitae posuere. Proin eu dui sit amet urna blandit aliquam. Quisque posuere commodo mi, vitae 
        </p>
        </div>
    </motion.div>
  )
}

export default About