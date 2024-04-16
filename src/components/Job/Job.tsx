"use client";
import useSpecilization from '@/Hooks/useSpec';
import GlobalApi from '@/utils/GlobalApi';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Job = () => {
    const specs = useSpecilization();

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [numb, setNumb] = useState();
    const [seria, setSeria] = useState();
    const [spec, setSpec] = useState();
    const [salary, setSalary] = useState();
    const [time, setTime] = useState();
    const [times, setTimes] = useState();
    // следим за данными
    const [formField, setFormField] = useState();

    useEffect(() => {
        if (name && phone && email && numb && seria && spec && salary && time && times) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [name, phone, email, numb, seria, spec, salary, time, times]);

    const saveFields = () => {
        const data = {
            data: {
                name: name,
                phone: phone,
                email: email,
                numb: numb,
                seria: seria,
                spec: spec,
                salary: salary,
                time: time,
                times: time,
            }
        }
        GlobalApi.createJob(data).then(resp => {
            console.log(resp);
            if (resp) {
                alert('Данные успешно отправлены!');
            }
        })
    }
    
    return (
        <section className='w-full py-16'>
            <div className="container mx-auto flex flex-col items-center">

                <h2 className="text-center text-3xl uppercase font-semibold mb-10">Записаться на собеседование</h2>
                <div className="w-[50%] h-full flex items-center rounded-2xl border border-blue-200 bg-blue-50  transition p-5 justify-between">
                
                    
                    <div  className="w-full h-full  bg-blue-50 flex flex-col items-center justify-between transition gap-2 p-5">
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">ФИО</span>
                            <input type="text" onChange={(e) => setName(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Телефон</span>
                            <input type="phone" onChange={(e) => setPhone(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Электронная почта</span>
                            <input name="" type='email' onChange={(e) => setEmail(e.target.value)} className='w-[100%] h-[45px] p-2 rounded-2xl border-blue-200 border bg-sky-100' id="" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Паспорт</span>
                            <div className="w-full flex justify-between gap-10">
                                <input type="text" onChange={(e) => setSeria(e.target.value)} className="w-[80%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100 " />
                                <input type="text" onChange={(e) => setNumb(e.target.value)} className="w-[80%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100 " />
                            </div>
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Специальность</span>
                            <select onChange={(e) => setSpec(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" >
                            
                               {specs?.attributes?.specs?.data.map((item, index) => {
                                return(
                                  <option className="text-start  text-[24px] font-semibold font-oswald uppercase border-sky-300 border-b-2 mt-2 mb-2 pb-1 w-full">{specs.attributes?.name}</option>
                                )
                                })}
                            
                            </select>
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Заработок</span>
                            <input type="phone" onChange={(e) => setSalary(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                        </div>
                        <div className="w-full flex flex-col items-start gap-3">
                            <span className="text-[18px] font-semibold text-center">Время работы</span>
                            <input type="time" onChange={(e) => setTime(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
                            <input type="time" onChange={(e) => setTimes(e.target.value)} className="w-[100%] h-[45px] rounded-2xl p-2 border-blue-200 border bg-sky-100" />
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

export default Job
