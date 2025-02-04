import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const lang = ['js','typescript','python','php']
    const front = ['tailwind','react','nextjs']
    const back = ['node-js','express','nestjs']
    const db = ['mongodb','mysql','sqllite']
  return (
    <div className='p-4'>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >language - {lang.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='language' width={24} height={24} />)}</div>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >Frontend - {front.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='language' width={30} height={30} />)}</div>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >Backend - {back.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='language' width={30} height={30} />)}</div>
        <div className='flex items-center justify-start gap-2 text-scandry font-semibold mb-2' >Datebase - {db.map((item , index) => <Image key={index} src={`/${item}.svg`} alt='language' width={40} height={40} />)}</div>
    </div>
  )
}

export default Skills