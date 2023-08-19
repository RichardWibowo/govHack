"use client"
import { motion } from 'framer-motion'
import React from 'react'
import { FaReact, FaCss3Alt,  } from 'react-icons/fa'
import { SiTailwindcss,   } from 'react-icons/si'
import Skills from './Skills'

type Props = {}

export default function Skill({}: Props) {
  return (
    <motion.div 
    initial = {{opacity : 0}}
    whileInView = {{opacity : 1}}
    viewport = {{once : true}}
    transition = {{duration : 2.5}}
    className='h-screen flex flex-col relative text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
    mx-auto items-center'>

    <h3 className='absolute top-24 uppercase 
    tracking-[20px] text-gray-500 text-2xl'>skill and langguage</h3>
    <h3 className='absolute top-36  
    tracking-[3px] text-gray-600 text-m'>This is all the skill i learn in uni and from work  </h3>    
    
    <motion.div>
        <div className='grid grid-cols-4 gap-5'>
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
          <Skills />
        </div>
    </motion.div>
    </motion.div>
  )
}