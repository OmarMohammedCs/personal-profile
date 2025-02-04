import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const tools = ['github','postman']
    const manage = ['vercel','netlify']
  return (
    <div className='p-4'>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >Dev Tools - {tools.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='tools' width={24} height={24} />)}</div>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >Publishing projects - {manage.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='mange' width={35} height={35} />)}</div>
    </div>
  )
}

export default Skills