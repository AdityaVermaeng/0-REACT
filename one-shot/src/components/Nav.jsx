import React from 'react'

const Nav = () => {
	return (
		<div>
			<nav className=' bg-emerald-300 flex items-center py-5 px-10 justify-between'>
				<h2 className='text-2xl'>Sheriyans</h2>
				<div className='flex gap-8 items-center'>
					<h4 className='text-xl'>About</h4>
					<h4 className='text-xl'>Contact</h4>
					<h4 className='text-xl'>Services</h4>
					<h4 className='text-xl'>Your Account</h4>
				</div>
			</nav>
		</div>
	)
}

export default Nav