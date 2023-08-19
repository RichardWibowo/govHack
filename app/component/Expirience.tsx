"use client"
import React from 'react'
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Expirience({}: Props) {
  return (
    <motion.div 
    initial = {{x : -200, opacity : 0}}
    whileInView = {{ x : 0, opacity : 1}}
    viewport = {{once : true}}
    transition = {{duration : 1.2}}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
       
       <h3 className='absolute top-24 uppercase 
        tracking-[20px] text-gray-500 text-2xl'>Meet The Team</h3>

       
        <div className='w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory items-center  scrollbar scrollbar-track-slate-900/20 scrollbar-thumb-sky-300/30'>
        
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[400px] h-fit md:w-[500px] xl:w-[600px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/D5603AQHI1W6B2y4YSw/profile-displayphoto-shrink_200_200/0/1692168432284?e=1697673600&v=beta&t=_59iRn0uA3qZ9TzV51xcXrvRIjfgfwRPeFyp473YmEQ" 
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Ngan (Alvie) Nguyen</h4>
            <div className='flex space-x-2 my-2'>
            <SocialIcon url="https://www.linkedin.com/in/ngoc-kim-ngan-nguyen-74b033219/"
              fgColor = "gray"
              bgColor = "transparent"
            />
            </div>
        </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[400px] h-fit md:w-[500px] xl:w-[600px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/C4D03AQFlsiZzxHeKTQ/profile-displayphoto-shrink_200_200/0/1628049422954?e=1697673600&v=beta&t=NbtZm20McLxHafVs_fspAAHP3KyfppHSQoMoX_m8KP8"
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Gary Lou</h4>
            <div className='flex space-x-2 my-2'>
            <SocialIcon url="https://www.linkedin.com/in/gary-lou-0726ba169/"
              fgColor = "gray"
              bgColor = "transparent"
            />
            </div>
        </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[400px] h-fit md:w-[500px] xl:w-[600px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/D5635AQGqi20HNPTlZQ/profile-framedphoto-shrink_200_200/0/1691116632306?e=1693033200&v=beta&t=mglEqprvKWR39kja68ZD76iEg-wbKxlGfiGs13RSubQ"
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Bui Van Khanh (Katie) Vo </h4>
            <div className='flex space-x-2 my-2'>
            <SocialIcon url= "https://www.linkedin.com/in/bui-van-khanh-vo-88a673263/"
              fgColor = "gray"
              bgColor = "transparent"
            />
            </div>
        </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[400px] h-fit md:w-[500px] xl:w-[600px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/D5603AQFSBVXw9f4Ihw/profile-displayphoto-shrink_200_200/0/1689719793972?e=1697673600&v=beta&t=Sm2DpsMlSdwEiJzgWwqkA-fR91ocohFnpzQRP9M2vtA"
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Akilvish Paliwal</h4>
            <div className='flex space-x-2 my-2'>
            <SocialIcon url= "https://www.linkedin.com/in/akilvish-paliwal/"
              fgColor = "gray"
              bgColor = "transparent"
            />
            </div>
        </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 space-evenly w-[400px] h-fit md:w-[500px] xl:w-[600px] snap-center bg-slate-700 p-10
    hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial = {{y : -50, opacity : 0}}
        whileInView = {{ y : 0, opacity : 1}}
        viewport = {{once : true}}
        transition = {{duration : 1.2}}
        src = "https://media.licdn.com/dms/image/D5603AQGTtGWhn4uX0A/profile-displayphoto-shrink_200_200/0/1683281599358?e=1697673600&v=beta&t=dnQ3D2xJUUoquXJb8H950TCAcUvd-exvmECta74mVrQ"
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        alt = ""/>

        <div className='px-0  md:px-10 '>
            <h4 className='text-4xl font-light'>Richard Wibowo</h4>
            <div className='flex space-x-2 my-2'>
            <SocialIcon url= "https://www.linkedin.com/in/richard-wibowo/"
              fgColor = "gray"
              bgColor = "transparent"
            />
            </div>
        </div>
    </article>

        </div>
    </motion.div>
  )
}

export default Expirience;