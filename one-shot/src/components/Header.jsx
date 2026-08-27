import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

	return (
		<div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
			<h2 className='text-2xl'>Aditya</h2>
			<div className='flex gap-10 text-lg underline' >
				{/* <a href="/about" className='mx-2 hover:text-emerald-300'>About</a>
				<a href="/contact" className='mx-2 hover:text-emerald-300'>Contact</a>
				<a href="/product" className='mx-2 hover:text-emerald-300'>Product</a>
				<a href="/home" className='mx-2 hover:text-emerald-300'>Home</a> */}
				<Link to='/about' className='mx-2 hover:text-emerald-300'>About</Link>
				<Link to='/contact' className='mx-2 hover:text-emerald-300'>Contact</Link>
				<Link to='/product' className='mx-2 hover:text-emerald-300'>Product</Link>
				<Link to='/home' className='mx-2 hover:text-emerald-300'>Home</Link>
			</div>
			</div>
	)
}

export default Header