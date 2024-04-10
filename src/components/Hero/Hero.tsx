import React from 'react'

const Hero = () => {
  return (
    <section className='w-full bg-hero bg-cover bg-center bg-no-repeat' id='hero'>
      <div className="container mx-auto">
        <div className="w-full py-16 flex justify-end">
            <div className="w-[700px] h-[500px]  rounded-xl flex flex-col gap-[70px] items-end ">
                <h2 className="text-[35px] text-white uppercase font-bold text-center border-b-2 border-white">HealthMed</h2>
                <p className="text-[22px] text-black text-end p-5 bg-white rounded-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda optio possimus maxime, illo fugit ut. Dolore quibusdam, sed iusto corporis laudantium sit saepe perspiciatis inventore asperiores quidem sequi consequuntur, facilis eos incidunt doloremque omnis veniam beatae delectus at. Tempora qui suscipit eius necessitatibus veniam magni minima quasi nesciunt voluptatibus velit? </p>
                    {/* <div className="w-full  flex gap-6 items-center">
                        <div className="w-full flex gap-6 items-center">
                            <p className="text-10 font-semibold">Врач</p>
                                <select className='w-[80%] h-[35px] p-2 rounded-2xl border flex flex-col items-center' name="" id="">
                                    <option value="">sadasda</option>
                                </select>
                        </div>
                            <div className="w-full flex gap-6 items-center">
                                <p className="text-10 font-semibold">Врач</p>
                                <input type="date" className="w-[80%] h-[35px] rounded-2xl p-2 border-none" />
                            </div>
                    </div> */}
                <button className='shadow-lg w-[300px] bg-blue-400 h-[70px] rounded-full text-white uppercase font-oswald font-semibold text-[20px] hover:bg-blue-300'>Записаться</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
