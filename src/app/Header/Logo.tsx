import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='  p-2 flex justify-end'>
      <figure className='w-[100px] md:w-[150px] h-16 relative flex items-center'>
        <Image fill src="/images/logo.svg" alt="Logo" className='object-contain' />
      </figure>
    </div>
  )
}