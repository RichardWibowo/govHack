"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Electric Vehicle For The future",
    "Green Car, For Green Earth", 
    "For GovHack 2023"
  ],
  loop: true,
  delaySpeed:500,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <img src='https://pngimg.com/d/electric_car_PNG8.png'></img>
      <div className='z-20 '>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>The Future Is Here </h2>
      
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#000000' />
      </h1>
      </div>

    </div>
  )
}