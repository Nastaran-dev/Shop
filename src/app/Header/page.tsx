
import Logo from './Logo'
import Menu from './Menu'
import Icon from './Icon'
export default function Header() {
  return (
    <header className='w-full flex justify-between'>
      <Icon/>
      <Menu/>
      <Logo/>
    </header>
  )
}
