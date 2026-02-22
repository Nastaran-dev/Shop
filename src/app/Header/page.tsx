"use client"
import Logo from './Logo'
import NavMenu from './Menu'
import Icon from './Icon'
import { useState } from 'react'

export default function Header() {
  const [showmenu, setShowmenu] = useState(false)
  return (
    <header className='w-full flex justify-between  fixed top-0 right-0 z-50 bg-white'>
      <Logo />
      <div className={`${showmenu ? 'flex' : 'hidden'} lg:flex`}>
        <NavMenu />
      </div>
      <Icon setShowmenu={setShowmenu} showmenu={showmenu} />
    </header>
  )
}