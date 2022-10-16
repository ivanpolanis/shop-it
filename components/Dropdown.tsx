import Link from 'next/link'
import React from 'react'

const Dropdown = () => {
	return (
		<div className='relative inline-block text-left'>
			<div>
				<span
					className='inline-flex w-full justify-center cursor-pointer px-4 py-2 font-medium  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
					id='menu-button'
					aria-expanded='true'
					aria-haspopup='true'
				>
					Options

				</span>
			</div>

			<div
				className='absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 hidden hover:visible focus:outline-none dark:bg-gray-600'
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
				tabIndex={-1}
			>
				<div className='py-1' role='none'>
					<Link href='/'>
						<a
							className=' block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex={-1}
							id='menu-item-0'
						>
							Account settings
						</a>
					</Link>
					<Link href='/'>
						<a
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex={-1}
							id='menu-item-1'
						>
							Support
						</a>
					</Link>
					<Link href='/categories/food'>
						<a
							className='text-gray-700 block px-4 py-2 text-sm'
							role='menuitem'
							tabIndex={-1}
							id='menu-item-2'
						>
							Food
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
