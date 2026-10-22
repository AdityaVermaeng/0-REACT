import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Login from './Login'

const Toggle = () => {

 const [ isLoggedIn, setIsLoggedIn ]=useState(false);

 const handleClick=()=>{
	setIsLoggedIn(!isLoggedIn);
 }
 console.log("Toggle Render")
	return (
		<div>
			<button onClick={handleClick}>Toggle</button>
			{isLoggedIn ? <Dashboard /> : <Login />}
		</div>
	)
}

export default Toggle;
