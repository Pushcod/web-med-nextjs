import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Specialization = () => {
  return (
    <section className='w-full py-16 bg-medic'>
        <div className="container mx-auto">

            <h2 className="text-center text-3xl text-white uppercase font-semibold mb-10 w-full border-b-2">Наши врачи</h2>
                <Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide className='w-full h-full '>
                    <div className="flex w-[500px] h-full border  bg-white rounded-xl p-2 gap-2">
                        <Image className='w-[200px] h-full border rounded-xl' src={'/assets/img/doc/elena.jpg'} width={200} height={50} />
                        <div className="flex flex-col items-start w-[270px] h-full">
                            <h3 className="text-center text-black text-[20px]">Елена</h3>
                            <ul className="w-full">
                                <li className="w-full">
                                    <span className="text-zinc-600 uppercase text-[14px] font-semibold w-full">Хирург</span>
                                </li>
                                <li className="w-full">
                                    <span className='text-black text-[14px] w-full h-full row-auto'>dadaddassssssssssssdsaaaaaaaaadsad</span>
                                </li>
                                <li className="w-full flex flex-col">
                                    <span className="text-10 text-black">Режим работы:</span>
                                    <span className="text-10 text-black">10:00 - 16:00 Пн-Чт</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                </Swiper>
    
        </div>
    </section>
  )
}

export default Specialization
