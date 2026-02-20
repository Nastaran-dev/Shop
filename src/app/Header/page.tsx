"use client"
import Logo from './Logo'
import { NavigationMenuDemo } from './Menu'
import Icon from './Icon'
import { useState } from 'react'

export default function Header() {
  const [showmenu, setShowmenu] = useState(false)
  return (
    <header className='w-full flex justify-between relative'>
      <Logo />
      <div className={`${showmenu ? 'flex' : 'hidden'} lg:flex`}>
        <NavigationMenuDemo />
      </div>
      <Icon setShowmenu={setShowmenu} showmenu={showmenu} />
    </header>
  )
}