import React,{useContext} from 'react'
import { DataContext } from '../context/UserContext.jsx'

const Footer = () => {
	const data = useContext(DataContext);

	return (
		<div>Footer {data.city}</div>
	)
}

export default Footer