"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar';
import { FaBars } from "react-icons/fa";
import NavbarMobile from "@/components/NavbarMobile/NavbarMobile";



const Header = () => {

  const [ openNav, setOpenNav ] = useState(false);
  

  return (
    <header className='w-full h-[70px] bg-zinc-200'>
      <div className="container mx-auto h-full flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
          <Link href="/" className='w-[100px] h-[50px]'>
            <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <NavbarMobile containerStyle={`${openNav ? 'max-h-max border-b border-zinc-800 p-[15px]' : 'max-h-0 overflow-hidden py-0 px-[15px] border-zinc-800/0' } fixed w-full top-[71px] left-0 right-0 transition-all duration-300 bg-zinc-900 md:hidden`} />

          <Navbar containerStyle='hidden md:flex' />

          
        
            <button onClick={() => setOpenNav(!openNav)} className='text-xl text-white w-[45px] h-[45px] flex items-center justify-center border border-zinc-500 rounded-md md:hidden'>
              <FaBars />
            </button>
            
          
        </div>
      </div> 
    </header>
  )
}

export default Header