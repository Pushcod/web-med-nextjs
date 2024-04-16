"use client"
import Image from 'next/image'
import React from 'react'

const Spec = ({ getSpecilization }) => {
  return (
    <section className='w-full py-16 '>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className="text-center text-3xl uppercase font-semibold">Специализации</h2>
          <ul className="w-full grid grid-cols-2 gap-5">
            {getSpecilization.length > 0 ? getSpecilization.map((item, index) => {
              return (
                <li key={index} className='w-[700px] h-full rounded-2xl border border-sky-400 bg-blue-50 flex  items-center  transition gap-5 p-1'>
                  <Image className='w-[200px] h-full bg-zinc-100 rounded-xl object-cover' src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + (item.attributes?.image?.data.attributes?.url ?? '')} width={250} height={400} />
                  <div className="w-full h-full pr-3">
                    {item.attributes?.specs?.data.map((item, index) => {
                        return(
                          <h3 className="text-start  text-[24px] font-semibold font-oswald uppercase border-sky-300 border-b-2 mt-2 mb-2 pb-1 w-full">{item.attributes?.name}</h3>
                        )
                    })}
                    
                    <p className="text-[16px]  text-zinc-700 row-auto break-words">{item.attributes?.description.length > 300 ? item.attributes?.description.slice(0,300) + '...' : item.attributes?.description}</p>

                  </div>
                </li>
              )
            })
              :
              [1, 2, 3, 4].map((item, index) => {
                return (
                  <div key={index} className="w-[337.5px] h-[460px] rounded-xl bg-zinc-800 animate-pulse"></div>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Spec


