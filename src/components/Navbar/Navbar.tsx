import Link from 'next/link';
import React from 'react';

const menuLinks = [
  { label: 'Главная', url: '/' },
  { label: 'Врачи', url: '/about' },
  { label: 'Услуги', url: '/sales' },
  { label: 'Записи', url: '/catalog' },
  { label: 'Специализация', url: '/articles' },
  
];

const Navbar = ( { containerStyle } : { containerStyle: string } ) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex items-center justify-center gap-4">
        {menuLinks.map(( item, index ) => {
          return (
            <>
              <li key={index}>
                <Link href={item.url} className='text-black uppercase'>{item.label}</Link>
              </li>
            </>
          )
        })}
      </menu>
    </nav>
  )
}

export default Navbar;