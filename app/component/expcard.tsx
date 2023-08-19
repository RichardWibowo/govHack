import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function Expcard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[500px] h-fit md:w-[600px] xl:w-[900px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/C4D0BAQFFeKHHINi2yA/company-logo_200_200/0/1656979352960?e=2147483647&v=beta&t=f1xI_xE03Lzb1_8MjekzF8n7VxPz7lDOVawFNIVGy1I" 
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Student Internship</h4>
            <p className='font-bold text-2xl mt-1'>BT Finance Group</p>

            <div className='flex space-x-2 my-2'>
                
            </div>
            <p className='uppercase py-5 text-gray-400'>Started @ ... - Finished @ ... </p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>SUMMARY</li>
                <li>SUMMARY</li>
                <li>SUMMARY</li>
                <li>SUMMARY</li>
                
            </ul>

        </div>
    </article>
  )
}