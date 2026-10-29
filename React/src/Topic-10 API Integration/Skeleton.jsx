import React from 'react'

const Skeleton = () => {
	return (
		<div className='skeleton_container'>
			{
				Array.from({length:30}).map((_,index)=> <div key={index} className='skeleton_card'></div>)
			}

		</div>
	)
}

export default Skeleton
