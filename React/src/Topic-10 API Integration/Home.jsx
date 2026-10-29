import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

const Home = () => {
	const [products, setProducts]=useState([]);
	useEffect(()=>{

		            const getProducts=async()=>{
			             const response=await fetch("https://dummyjson.com/products");
		               const data=await	response.json();
									//  console.log("products",data.products)
									 setProducts(data.products);
	  	          }
	  	          getProducts();
	},[]);

	return (products.lenght === 0) ? <Skeleton /> : <div className=''>
		{
			products.map(element=><ProductCard  key={element.id} element={element} />)
		}
	</div> 
}

export default Home
