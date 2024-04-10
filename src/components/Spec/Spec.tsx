"use client"
import Image from 'next/image'
import React from 'react'

const Spec = () => {
  return (
    <section className='w-full py-16 '>
        <div className="container mx-auto">
          <div className="w-full flex flex-col gap-10">
            <h2 className="text-center text-3xl uppercase font-semibold">Специализации</h2>
              <ul className="w-full flex items-center justify-between">
                  
                  <li className='w-[500px] h-[400px] rounded-2xl border border-sky-400 bg-blue-50 flex  items-center relative  transition gap-5 p-1'>
                    <Image className='w-[180px] h-full bg-zinc-100 rounded-xl object-cover' src={'/assets/img/doc/elena.jpg'} width={250} height={400} />
                    <div className="w-full justify-between h-full">
                      <h3 className="text-start top-0  text-[24px] font-semibold font-oswald uppercase border-sky-300 border-b-2 mt-2 mb-2 pb-1 w-[95%]">Терапевт</h3>
                      <p className="text-10  text-zinc-700 row-auto">Максимум символов 526</p>
                    </div>
                  </li>

              </ul>
          </div>
        </div>
    </section>
  )
}

export default Spec
