import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeSwitcher = () => {
	const { systemTheme,theme: mode, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)
	useEffect(() => setMounted(true), [])
	const toggleTheme = () => {
		setTheme(mode === 'dark' ? 'light' : 'dark')
	}

	const renderThemeIcon = () => {
		if (!setMounted) return null
		const currentTheme = systemTheme === 'dark' ? 'dark' : 'light'
		return currentTheme === 'dark' ? (
			<SunIcon className='w-7 h-7' onClick={toggleTheme} />
		) : (
			<MoonIcon className='w-7 h-7' onClick={toggleTheme} />
		)
	}

	return <> {renderThemeIcon()}</>
}

export default ThemeSwitcher
