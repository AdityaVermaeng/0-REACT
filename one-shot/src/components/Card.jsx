import React from 'react'

const Card = (props) => {
	return (
		<div className='mr-7 bg-black text-white inline-block p-6 text-center rounded'>
			<img className="h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
<h1 className='text-2xl font-semibold mb-4'>{props.username}</h1>
<h2>{props.city}</h2>
<h3>{props.age}</h3>
<h4 className='text-2xl'>{props.proffe }</h4>
<button className=' bg-white text-black px-5 py-2 rounded font-medium mt-5'> Add friend </button>
		</div>
	)
}

export default Card