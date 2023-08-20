'use client'
import React from 'react';
import { motion } from "framer-motion";

type Props = {};

function ChargerDist({}: Props) {
  return (
    <motion.div 
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.7 }}
      className='h-screen flex flex-col relative text-center
      md:text-left md: max-w-7xl px-10 justify-evenly 
      mx-auto items-center'>

      <h3 className='absolute top-24 uppercase 
      tracking-[20px] text-gray-500 text-2xl'>charging map victoria</h3>

      <div className='flex relative flex-row gap-5'>
        <div className='w-[60%] relative' style={{ aspectRatio: '16 / 9' }}>
          <img src="https://cdn.discordapp.com/attachments/1135457330524344381/1142436199278055504/image.png" className='w-full h-full' alt="Image 1"></img>
          <p className="absolute bottom-0 left-0 bg-gray-800 text-white p-2">EV/Postcode Data</p>
        </div>
        <div className='w-[60%] relative' style={{ aspectRatio: '16 / 9' }}>
          <img src="https://www.energy.vic.gov.au/__data/assets/image/0030/593157/Electric-vehicle-charger-locations.png" className='w-full h-full' alt="Image 2"></img>
          <p className="absolute bottom-0 left-0 bg-gray-800 text-white p-2">Charging Station/Postcode</p>
        </div>
      </div>

      <div className=' flex relative'>
      <p className='text-base'> To emphasize their incentive to shift the demand to BEV, Victoria’s, as well as Australia’s, government deploys high-power charging stations at the same rate and location as where EVs are registered. This not only ensures the residents’ convenience but also highlights the incentive to transfer to complete green transportation in the future.</p>
      </div>
    </motion.div>
  )
}

export default ChargerDist;
