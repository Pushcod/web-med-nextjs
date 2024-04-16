"use client";
import useFooter from '@/Hooks/useFooter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {

  const setFooterList = useFooter();

  return (
    <footer className='w-full h-[70px]'>
      <div className="container mx-auto h-full flex items-center">
        <div className=" w-full h-full flex items-center justify-between">
          <Link href="/" className='w-[200px] h-[50px]'>
              <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <ul className="inline-flex gap-5">
              {setFooterList.length > 0 ? setFooterList.map((item, index) => {
                  return (
                         
                      <Link key={index} href='/' className='group w-[50px] h-[50px] m-0 bg-blue-200 rounded-xl p-1'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes?.icon?.data.attributes?.url ?? ''} alt='Логотип сайта' width={20} height={20} className='w-full h-full m-0 p-0 rounded-xl fill-red-700' />
                      </Link>  
                    
                  )
                  })
                  :
                  [1,2,3].map((item, index) => {
                  return (
                    <div key={index} className="w-[50px] h-[50px] rounded-xl bg-zinc-800 animate-pulse"></div>
                );
              })
              }
          </ul>

        </div>
      </div>
    </footer>

  )
}

export default Footer
