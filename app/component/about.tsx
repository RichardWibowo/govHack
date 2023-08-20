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
                <span className=''> little background</span>
        </h4>
        <p className='text-base'>
        Our team has developed an application interface that displays a dashboard of insights, trends and graphs which explore the relationship between vehicle types and the uptake of EVs, the current issues with EV infrastructure, the potential reasons of particular consumer behaviour and the reasons why Australians might not be adopting EVs as rapidly as other countries.
        Under the dashboards and metrics, we also provide relevant policy measures and incentives that we believe could help stimulate EV uptake, and expand the charging infrastructure in each state and territory of Australia.
        </p>
        </div>
    </motion.div>
  )
}

export default About