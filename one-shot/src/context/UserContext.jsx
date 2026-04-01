import React from 'react'
export const DataContext = React.createContext();

const UserContext = ({children}) => {
const userData = {
	name:"Aniket",
	age:24,
	city:"Pune"
}

	return (

		<div>
			{/* <h1> this  is UserContext(Now App becomes the child of usercontext)</h1> */}

<DataContext.Provider value={userData}>
	{children}
	</DataContext.Provider>




		</div>
	)
}

export default UserContext