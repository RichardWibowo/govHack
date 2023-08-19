"use client"
import React from 'react'
import { motion } from "framer-motion"
import Expcard from './expcard'

type Props = {}

function Project({}: Props) {
  const project = [1,2,3,4];
  return (
    <motion.div 
    initial = {{x : -200, opacity : 0}}
    whileInView = {{ x : 0, opacity : 1}}
    viewport = {{once : true}}
    transition = {{duration : 1.2}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
       
    <h3 className='absolute top-24 uppercase 
    tracking-[20px] text-gray-500 text-2xl items-center align-middle'>Projcet</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
        {project.map((project, i) =>(
            // eslint-disable-next-line react/jsx-key
            <div 
            
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
              initial = {{x : 0, opacity : 0}}
              whileInView = {{ x : 0, opacity : 1}}
              viewport = {{once : true}}
              transition = {{duration : 1.2}}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9dPwd8wgE-8y3ebK4Fr5d-gQk-64-Bu2ZqiGjdRr1w&s" alt="" />
            
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>Project Title Here {i + 1}</h4>
              
                <p className='text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor tempor lacus ac ultrices. Mauris eget rutrum mauris, quis egestas ante. Nullam pulvinar maximus risus vitae posuere. Proin eu dui sit amet urna blandit aliquam. Quisque posuere commodo mi, vitae mollis libero tempus eu. Integer convallis vestibulum quam, non venenatis nibh iaculis quis. Ut et ante vitae dolor vehicula venenatis id sit amet leo. Nulla ac commodo dolor. Etiam sollicitudin dictum volutpat. Morbi sit amet hendrerit dui. Fusce nec rutrum risus. Integer dapibus diam convallis placerat ullamcorper. Sed dictum ultrices metus. Proin mattis orci et diam malesuada, a facilisis arcu finibus. 
                </p>
              </div>
            </div>
        ))}
    </div>

    <div className='w-full absolute justify-center align-middle
 bg-yellow-100/10 left-0 h-[500px] -skew-y-12'/>

    </motion.div>
  )
}

export default Project;