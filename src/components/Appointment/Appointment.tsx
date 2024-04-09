"use client"

import React from 'react'

const Appointment = () => {
  return (
    <section className='w-full py-16'>
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10 items-center">
                <h2 className="text-center text-3xl uppercase font-semibold">Записаться на приём</h2>

                <ul className="w-[400px] h-full rounded-2xl border border-black flex flex-col items-center relative justify-between transition gap-2 p-5">
                    <li className="w-full flex flex-col items-start">
                        <span className="text-[18px] font-semibold text-center">Специальность</span>
                        <select name="" className='w-[80%] h-[35px] p-2 rounded-2xl border' id=""></select>
                    </li>
                    <li className="w-full flex flex-col items-start">
                      <span className="text-[18px] font-semibold text-center">Дата</span>
                      <input type="date" className="w-[80%] h-[35px] rounded-2xl p-2 border-none " />
                    </li>
                    <li className="w-full flex flex-col items-start">
                      <span className="text-[18px] font-semibold text-center">Время</span>
                        <input type="time" className="w-[80%] h-[35px] rounded-2xl p-2 border-none" />
                    </li>
                    <li className="w-full flex flex-col items-start">
                        <span className="text-[18px] font-semibold text-center">ФИО</span>
                        <input type="text" className="w-[80%] h-[35px] rounded-2xl p-2 border-none" />
                    </li>
                    <li className="w-full flex flex-col items-start">
                        <span className="text-[18px] font-semibold text-center">Телефон</span>
                        <input type="phone" className="w-[80%] h-[35px] rounded-2xl p-2 border-none" />
                    </li>
                </ul>

                <button className='mt-5 text-center uppercase font-semibold rounded-2xl border border-black flex flex-col p-2 hover:bg-blue-100' href='#'>Отправить данные</button>

            </div>
        </div>
    </section>
  )
}

export default Appointment
