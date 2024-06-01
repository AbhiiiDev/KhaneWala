import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'
const Header = () => {
  return (
    <div className='bg-[#D6D6D6] bg-opacity-25 backdrop-filter backdrop-blur-lg z-20 py-4 shadow-slate-400 shadow-md'>
        <div className='container mx-auto flex justify-between items-center flex-wrap'>

     <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-black"
          >
          KhaneWala.com
        </Link>

        <div className='md:hidden'>
        <MobileNav/>
        </div>
        <div className='hidden md:block'>
        <MainNav/>
        </div>
            </div>
    </div>
  )
}

export default Header
