import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{scale: [1,2,3,2,1], opacity:[0.1,0.2,0.4,0.6,1,0.6,0.4], borderRadius: ["20%", "20%", "50%", "80%", "20%"]}}
    transition= {{duration :2.5, }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-slate-900 rounded-full h-[800px] w-[800px] mt-52'/>
        <div className='absolute border border-slate-800 rounded-full h-[400px] w-[400px] mt-52 '/>
        <div className='absolute border border-slate-900 rounded-full h-[200px] w-[200px] mt-52'/>
        <div className='opacity-20 absolute border border-white rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>

    </motion.div>
  )
}

export default BackgroundCircles