"use client";
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Specialization = ({ getDoctor }) => {
    return (
        <section className='w-full py-16 bg-medic shadow-[0_0_20px_5px_rgb(0,0,0,0.2)]'>
            <div className="container mx-auto">

                <h2 className="text-center text-3xl text-white uppercase border-b-2 mb-8 pb-3 w-full font-semibold ">Наши врачи</h2>
                <Swiper spaceBetween={120} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} className='w-full flex'>
                    {getDoctor.length > 0 ? getDoctor.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='w-full h-full '>

                                <div className="flex w-[500px] h-full border border-sky-400  bg-white rounded-xl p-2 gap-2">
                                    
                                    <Image className='w-[200px] h-[200px] border rounded-xl' src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + (item.attributes?.image?.data.attributes?.url ?? '')} width={200} height={200} />
                                    <div className="flex flex-col items-start w-[270px] h-full ">
                                        <h3 className="text-center text-black text-[20px]">{item.attributes?.name}</h3>
                                        <ul className="w-full ">
                                            <li className="w-full">
                                                <span className="text-zinc-600 uppercase text-[14px] font-semibold w-full">{item.attributes?.spec?.data.attributes?.name}</span>
                                            </li>
                                            <li className="w-full h-[74px] border-b-[1px] border-sky-400">
                                                <p className="row-auto">
                                                    <span className='text-black text-[14px] w-full h=full row-auto'>{item.attributes?.description}</span>
                                                </p>
                                            </li>
                                            <li className="w-[100%] flex flex-col justify-center items-center m-0 p-0">
                                                <span className="text-10 text-center text-black m-0 p-0">Режим работы:</span>
                                                <p className="flex gap-5 justify-between w-[90%] ">
                                                    <span className="text-10 text-black ">{item.attributes?.workdaytimestart.slice(0,5)} - {item.attributes?.workdaytimeend.slice(0,5)}</span>
                                                    <span className="text-10 text-blue-600">Пн-Чт</span>
                                                </p>
                                                <p className="flex gap-5 justify-between w-[90%]">
                                                    <span className="text-10 text-black">{item.attributes?.dayworktimestart.slice(0,5)} - {item.attributes?.dayworktimeend.slice(0,5)}</span>
                                                    <span className="text-10 text-red-600">Сб-Вс</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </SwiperSlide>
                        )
                    })
                        :
                        [1, 2, 3, 4].map((item, index) => {
                            return (
                                <div key={index} className="w-[337.5px] h-[460px] rounded-xl bg-zinc-800 animate-pulse"></div>
                            );
                        })
                    }
                </Swiper>

            </div>
        </section>
    )
}

export default Specialization
