import React from 'react'

export default function Footer() {
  return (
    <div className='min-h-[150px] container mx-auto flex flex-col md:flex-row  justify-between items-center bg-black space-y-2'>
        <span className='font-bold text-3xl text-white'>
    KhaneWala.com
        </span>
        <span className='text-lg text-white'>
    Made with 💻  By  <span className='font-medium text-xl text-blue-600'>Abhishek Verma.</span>
        </span>
        <div className='flex flex-col text-white gap-2'>
        <span>Terms & Conditions Apply</span>
        <span>Privacy @ Rights Reserved</span>
        </div>
      
    </div>
  )
}
