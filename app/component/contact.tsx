"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Contact({}: Props) {
  return (
    <motion.div 
    initial = {{x : -200, opacity : 0}}
    whileInView = {{ x : 0, opacity : 1}}
    viewport = {{once : true}}
    transition = {{duration : 1.2}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase 
        tracking-[20px] text-gray-500 text-2xl items-center align-middle'>Contact</h3>


        
    </motion.div>
  )
}

export default Contact