import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Service = ({ containerStyle, text, href } : { containerStyle: string, text: string, href: string }) => {
  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="text-center text-3xl uppercase font-semibold">Услуги</h2>
            <ul className="w-full flex items-center justify-between">
                <li className="w-[250px] h-[250px] rounded-2xl border border-black flex flex-col items-center relative justify-between transition">
                    <Image className='w-[70px] h-[70px] absolute bottom-[200px] right-[200px] bg-zinc-100 rounded-xl ' src={'/assets/img/service/call.svg'} width={250} height={100}/>
                    <div className="text-center pb-6 px-1 h-full border-b-2 border-black flex flex-col items-center justify-end">
                        <h3 className="text-center uppercase text-[24px] font-semibold font-oswald">Записаться</h3>
                    </div>
                    <div className="w-full px-2 my-3 flex flex-col justify-between items-center">
                      <p className="text-10 text-center text-zinc-400">Запишитесь бесплатно по номеру ниже</p>
                      <p className="text-10 text-center text-zinc-300">+31231-3232</p>
                    </div>
                    <Link href={''} className={`${containerStyle} group relative overflow-hidden uppercase inline-flex items-center justify-center`}>
                    <button className="w-[200px] h-[90px] transition translate-x-1 relative hover:bg-black group-hover:translate-x-10">
                        <div className="h-full w-[30px] bg-black ease origin-center transition-all duration-300 group-hover:h-64 group-hover:translate-x-full">
                          
                        </div>
                        <p className='w-full absolute top-2 text-center text-zinc-100'>перейти</p>
                    </button>
                    </Link>
                </li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Service
