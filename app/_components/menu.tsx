import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Menu = () => {
  const pages = [
    { name: "Home", path: "/home.svg" ,href:"#home"},
    { name: "About", path: "/analytics.svg" ,href:"#about"},
    { name: "work", path: "/chat.svg" ,href:"#work"}, 
       { name: "service", path: "/tactic.svg" ,href:"#service"},

    { name: "Contact", path: "/mail.svg" ,href:"#contact"}
  ];

  return (
    <div className='p-2 py-4 bg-gray-300 bg-opacity-40 rounded-full fixed bottom-40 h-fit md:top-1/3 right-5 md:right-7 flex flex-col items-center gap-3 shadow-lg transition-all duration-300 z-40'>
      {pages.map((page, index) => (
        <div key={index} className="relative group">
          <Link href={page.href}><Image
            src={page.path}
            alt={page.name}
            width={23}
            height={23}
            className="rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer my-1 hover:shadow-md"
          /></Link>
          
          <span className="absolute right-10 -mt-7 scale-0 group-hover:scale-100 transition-transform duration-300 inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 shadow-md">
            {page.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Menu;
