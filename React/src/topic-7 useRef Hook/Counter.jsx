import React from 'react'
import "./Counter.css"
import{ useRef, useState} from 'react';

const Counter = () => {
	const [ Count, setCount ]=useState(0);
	const CountRef=useRef(0);
	const handleClick=()=>{
		CountRef.current=CountRef.current+1;
	}
	return (
		<div>
			<div className='container'>
    <h2>State Counter</h2>
		<h3>Count: {Count}</h3>
		<button onClick={()=> setCount(Count+1)}>Add</button>
		</div>

		<div className='container'>
    <h2>useRef Counter</h2>
		<h3>RefCount: {CountRef.current}</h3>
		<button onClick={handleClick}>Add</button>
		</div>
		</div>


	)
}

export default Counter
