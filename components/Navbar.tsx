import Link from 'next/link'
import { useContext } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import {Mode} from '../types'
import Dropdown from './Dropdown'

const Navbar = () => {

	return (
		<nav className='flex justify-between p-2 font-sans sticky top-0 dark:text-white'>
			<div className='my-auto'>
				<Link href='/'><h1 className='font-bold text-xl'><span className='font-semibold'>Shop</span> It</h1></Link>
			</div>
			<div className='my-auto'>
				<Link  href='/'><a className='mx-1 px-1 font-medium'>Home</a></Link>
				<Dropdown />
				<Link  href='/contact'><a className='mx-1 px-1 font-medium'>Contact us</a></Link>
      </div>
      <ThemeSwitcher />
		</nav>
	)
}

export default Navbar
