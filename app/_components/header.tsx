import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const links = [{id:1,img:"facebook.svg"},{id:2,img:"github.svg"},{id:3,img:"linkedin.svg"}]
  return (
    <div className='fixed top-0 w-full flex items-center justify-between px-10 md:px-32 py-2 z-30'>
<div className="text-3xl font-bold">
       <Link href="/"> <span className="text-distinct">omar</span> <span className="text-scandry hidden md:inline-block">mohammed.</span></Link>
      </div>
        <div className='flex items-center justify-between gap-5 '>
            {links.map(link=>
            <Link key={link.id} href="/"><Image src={link.img} alt='logo' className='text-text hover:text-distinct hover:shadow-md border border-text hover:scale-105 rounded-full' width={22} height={22} /></Link>
            )}
        </div>
    </div>
  )
}

export default Header