"use client";

import Image from 'next/image';
import React, { useEffect } from 'react'
// import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import useSingleDoctor from '@/Hooks/useSingleDoctor';

export default function page({params}) {
    
    const detailDoctor = useSingleDoctor(params.id);
  
    return (
      <section className='w-full py-16'>
      <div className="container mx-auto">
        {/* Начало превью */}
        <div className="w-full h-[320px] md:h-[520px] overflow-hidden rounded-xl">
            {detailDoctor?.attributes?.image?.data.attributes?.url ? 
            <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + (detailDoctor?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={1200} height={520} className='w-full h-full object-cover' />
            :
              <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
            }

        </div>
        {/* Конец превью */}
        {/* Начало названия */}
        {detailDoctor?.attributes?.name ? 
          <h2 className="text-left text-white text-5xl uppercase mt-10">{detailDoctor?.attributes?.name}</h2>
          :
          <div className='w-full mt-10 flex flex-col gap-4'>
            <div className="w-1/2 h-12 rounded-lg bg-zinc-800 animate-pulse"></div>
            <div className='w-1/3 h-12 rounded-lg bg-zinc-800 animate-pulse'></div>
          </div>
        }
        {/* Конец названия */}
        {/* Начало описания */}
        {detailDoctor?.attributes?.description ? 
          <p className="text-zinc-700 text-base md:text-xl text-left mt-7">{detailDoctor?.attributes?.description}</p>
          :
          [1,2,3,4,5,6,7].map((item, index) => {
            return (
              <div key={index} className="w-full h-5 rounded-lg bg-zinc-800 animate-pulse mt-7"></div>
            )
          })
        }
        {/* Конец описания */}
      </div>
    </section>
  )
}

