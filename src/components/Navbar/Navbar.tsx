import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Главная', url: '/' },
  { label: 'Врачи', url: '/doctors' },
  { label: 'Услуги', url: '/sales' },
  { label: 'Записи', url: '/catalog' },
  { label: 'Специализация', url: '/articles' },
  
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-between gap-4 bg-blue-400 h-[50px] p-2 rounded-full">
        {menuLinks.map(( item, index ) => {
          return (
            <>
              <li key={index} className='w-full h-full bg-blue-200 p-1 rounded-full'>
                <Link href={item.url} className='text-black text-[14px] uppercase'>{item.label}</Link>
              </li>
            </>
          )
        })}
      </menu>
    </nav>
  )
}

export default Navbar;