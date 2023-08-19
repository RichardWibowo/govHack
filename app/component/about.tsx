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
            src = "https://i.redd.it/1pmsjnk8f1g01.jpg"
            className = 'rb-10 md:rb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]'
        />
        <div className=' px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            here is a 
                <span className='underline'> little background</span>
        </h4>
        <p className='text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tempor lacus ac ultrices. Mauris eget rutrum mauris, quis egestas ante. Nullam pulvinar maximus risus vitae posuere. Proin eu dui sit amet urna blandit aliquam. Quisque posuere commodo mi, vitae mollis libero tempus eu. Integer convallis vestibulum quam, non venenatis nibh iaculis quis. Ut et ante vitae dolor vehicula venenatis id sit amet leo. Nulla ac commodo dolor. Etiam sollicitudin dictum volutpat. Morbi sit amet hendrerit dui. Fusce nec rutrum risus. Integer dapibus diam convallis placerat ullamcorper. Sed dictum ultrices metus. Proin mattis orci et diam malesuada, a facilisis arcu finibus. 
        </p>
        </div>
    </motion.div>
  )
}

export default About