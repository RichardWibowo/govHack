'use client'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Conclusion({}: Props) {
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
        tracking-[20px] text-gray-500 text-2xl'>ways to improve EV adoption</h3>
        
        <div className=' px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            To The Goverment
        </h4>
        <ul className="list-disc gap-5">
            <li className = "mt-3">Public-Private Partnerships: Foster collaborations between government bodies and private enterprises to jointly invest in EV charging infrastructure. This partnership ensures efficient deployment and maintenance of charging stations.</li>
            <li className = "mt-3">Solar Charging Integration: Encourage the integration of EV charging stations with solar power systems, making EV charging more sustainable and reducing strain on the grid.</li>
            <li className = "mt-3">Registration Subsidies: Introduce substantial registration fee subsidies for EVs. This will reduce the upfront cost for consumers, making EVs more attractive.</li>
            <li className = "mt-3">Fleet Modernization Incentives: Offer tax incentives, grants, or subsidies for businesses and government agencies transitioning their fleets to EVs. This bolsters the market and increases demand for electric vehicles.</li>
            <li className = "mt-3">Regular Policy Review: Periodically review and adapt policies and incentives to align with technological advancements and changing consumer preferences.</li>
        </ul>
        </div>
    </motion.div>
  )
}
export default Conclusion