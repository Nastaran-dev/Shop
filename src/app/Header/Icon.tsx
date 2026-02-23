import React from 'react'
import { ShoppingCart, List } from 'lucide-react'

interface IconProps {
  setShowmenu: React.Dispatch<React.SetStateAction<boolean>>
  showmenu: boolean
}

export default function Icon({ setShowmenu, showmenu }: IconProps) {
  return (
    <div className='p-3 flex gap-8 items-center'>
      <span className=' flex md:hidden duration-700' onClick={() => { setShowmenu(!showmenu) }}>
        <List className=' h-6 w-6 text-black ' />
      </span>
      <span className='w-[10%]'>
        <ShoppingCart className='h-6 w-6 text-black' />
      </span>
    </div>
  )
}