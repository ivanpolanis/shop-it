import Link from 'next/link'
import { useContext } from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { ThemeContext } from './context/ThemeProvider'

const Navbar = () => {
  const {mode, toggleTheme} = useContext(ThemeContext)

	return (
		<nav className='flex justify-between p-2 font-sans sticky top-0'>
			<div className='logo'>
				<Link href='/'><h1 className='font-bold text-xl'><span className='font-semibold'>Shop</span> It</h1></Link>
			</div>
			<div className=''>
				<Link  href='/'><a className='mx-1 px-1 font-medium'>Home</a></Link>
				<Link  href='/about'><a className='mx-1 px-1 font-medium'>Categories</a></Link>
				<Link  href='/contact'><a className='mx-1 px-1 font-medium'>Contact us</a></Link>
      </div>
      <ThemeSwitcher mode={mode} toggleTheme={ toggleTheme } />
		</nav>
	)
}

export default Navbar
