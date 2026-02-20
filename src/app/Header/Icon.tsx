import React from 'react'
import { ShoppingCart, List } from 'lucide-react'

export default function Icon() {
  return (
    <div className='w-1/3 bg-blue-500 p-3 flex gap-8 md:gap-0 items-center'>
      <span className='w-[15%]'>
        <List className='h-6 w-6 text-white' />
      </span>
      <span className='w-[15%]'>
        <ShoppingCart className='h-6 w-6 text-white' />
      </span>
    </div>
  )
}