import React, { useEffect, useState } from 'react'

const Data = () => {
	// let [data,setData] =useState([]);
	let [Inc,setInc]= useState(0);
	let [Dec,setDec]= useState(0);
	useEffect(()=>{
		console.log("useEffect Call");
	},[Dec])
	console.log('component render')

	// async function fetchData(){
	// let response=	await fetch("https://jsonplaceholder.typicode.com/users");
	// let result =await response.json();
	// setData(result);
	// }
	// fetchData();
	return (
		<>
		<button onClick={()=>setInc(Inc+1)}>Badhao
		</button>
		<button onClick={()=>setDec(Dec+1)}>Ghatao
		</button>
{/* <ul> {data.map((user)=> ( <li key={user.id}>
            {user.email}
          </li>))}
				</ul> */}
		</>
	)
}

export default Data;
