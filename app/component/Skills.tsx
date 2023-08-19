import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial = {{opacity : 0}}
        whileInView = {{opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1}}
        src = "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" 
        className = "h-20 w-20 "/>
    </div>
  )
}