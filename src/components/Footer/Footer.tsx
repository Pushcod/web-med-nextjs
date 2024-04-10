import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[70px]'>
      <div className="container mx-auto h-full flex items-center">
        <div className=" w-full h-full flex items-center justify-between">
          <Link href="/" className='w-[200px] h-[50px]'>
              <Image src='/assets/img/logo.svg' alt='Логотип сайта' width={200} height={50} className='w-full h-full' />
          </Link>
          <ul className="inline-flex gap-5">
              {/* {setFlinkList.length > 0 ? setFlinkList.map((item, index) => {
                  return (
                         
                      <Link key={index} href={item.attributes?.link} className='group w-[50px] h-[50px] m-0 border border-zinc-800 bg-orange-600 rounded-xl p-1 hover:scale-50'>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL + item.attributes?.iconsvg?.data.attributes?.url} alt='Логотип сайта' width={50} height={50} className='w-full h-full m-0 p-0 rounded-xl' />
                      </Link>  
                    
                  )
                  })
                  :
                  [1,2,3].map((item, index) => {
                  return (
                    <div key={index} className="w-[50px] h-[50px] rounded-xl bg-zinc-800 animate-pulse"></div>
                );
              })
              } */}
          </ul>

        </div>
      </div>
    </footer>

  )
}

export default Footer
