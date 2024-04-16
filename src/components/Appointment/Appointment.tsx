"use client";

import GlobalApi from '@/utils/GlobalApi';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Appointment = () => {

  const [ name, setName] = useState();
  const [ number, setNumber ] = useState();
  const [ date, setDate ] = useState();
  const [ work, setWork ] = useState();
  const [ time, setTime ] = useState();
  // следим за данными
  const [ formField, setFormField ] = useState();

  useEffect(() =>{
    if (name && number && date && work && time ) {
      setFormField(true);
    } else{
      setFormField(false);
    }
  },[ name, number, date, work,time]);

  const saveFields = () => {
    const data = {
      data: {
        name: name,
        number: number,
        date: date,
        work: work,
        time: time,
      }
    }
    GlobalApi.createOrder(data).then(resp =>{
      console.log(resp);
      if (resp){
        alert('Данные успешно отправлены!');
      }
    })
  }

  


  return (
    <section className='w-full py-16'>
        <div className="container mx-auto flex flex-col items-center">
          
            <h2 className="text-center text-3xl uppercase font-semibold mb-10">Записаться на приём</h2>
              <div className="w-[80%] h-full flex items-center rounded-2xl border border-blue-200 bg-blue-50  transition p-5 justify-between">
                  <div className="w-full  flex flex-col justify-between p-5">
                    <h2 className="w-full text-[30px] text-center text-black font-bold font-oswald">Свяжитесь с нами</h2>
                    <p className="w-full text-[20px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing edivt. Corrupti, nisi, pariatur tempore cumque at reiciendis iste adipisci moldivtia, dicta provident delectus odit tempora facidivs. Unde quam laboriosam autem eaque sint.</p>
                    <ul className="w-full flex items-center mt-5 justify-center">
                      <div className="w-[50%] flex gap-2">
                        <Image src={''} className='w-[20px] h-[20px]' width={20} height={20} />
                        <span className="text-10 text-black">Почта</span>
                      </div>
                      <div className="w-[full] flex gap-2">
                        <Image src={''} className='w-[20px] h-[20px]' width={20} height={20} />
                        <span className="text-10 text-black">Телефон</span>
                      </div>
                    </ul>
                  </div>
                  <div className="w-full h-full border-l-2 border-blue-400 bg-blue-50 flex flex-col items-center justify-between transition gap-2 p-5">
                      <div className="w-full flex flex-col items-start gap-3">
                          <span className="text-[18px] font-semibold text-center">Специальность</span>
                          <input name="" onChange={(e) => setWork(e.target.value)} className='w-[100%] h-[45px] p-2 rounded-2xl border-blue-200 border bg-sky-100' id=""/>
                      </div>
                      <div className="w-full flex flex-col items-start gap-3">
                        <span className="text-[18px] font-semibold text-center">Дата</span>
                        <input type="date" onChange={(e) => setDate(e.target.value)}  className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100 " />
                      </div>
                      <div className="w-full flex flex-col items-start gap-3">
                        <span className="text-[18px] font-semibold text-center">Время</span>
                          <input type="time" onChange={(e) => setTime(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                      </div>
                      <div className="w-full flex flex-col items-start gap-3">
                          <span className="text-[18px] font-semibold text-center">ФИО</span>
                          <input type="text" onChange={(e) => setName(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                      </div>
                      <div className="w-full flex flex-col items-start gap-3">
                          <span className="text-[18px] font-semibold text-center">Телефон</span>
                          <input type="phone" onChange={(e) => setNumber(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                      </div>
                      <div className="">
                        <button disabled={!formField} onClick={() => saveFields()} className='mt-5 text-center uppercase font-semibold rounded-2xl border border-blue-300 bg-blue-50 flex flex-col p-5 hover:bg-blue-200' href='#'>Отправить данные</button>
                      </div>
                  </div>
                  
              </div>
              

      
          
        </div>
    </section>
  )
}

export default Appointment
