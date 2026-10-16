import React from "react"


const Card=({fullname="user",age="age",team="team"})=>{
	// console.log(props)
	return(
		<div>
      {/* { props.children} */}
			<h2>Fullname:{fullname}</h2>
			<h2>Age:{age}</h2>
			<h2>Team:{team}</h2>
		</div>
	)
}
export default Card;