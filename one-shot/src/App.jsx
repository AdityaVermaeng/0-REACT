// import React, { useState } from 'react'

// const App = () => {
//   let user = "Aditya"
//   const [username, changeUser] = useState(user);

//   const changeName = () => {
//     changeUser("Virat");
//   }

//   return (
//     <div>
//       <h1 className='text-5xl bg-red-700'>Username is {username}</h1>
//       <button onClick={changeName} >Change Name</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [username, changeUsername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("username is ", username);
//     changeUsername("");//after submitting the form, we want to clear the input field, so we set the username state to an empty string

//     // alert("Form Submitted");
//     }

//   return (  // <div>
//     //  <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center h-screen'>
//     //    <input className='px-4 py-3 rounded m-5' type="text" placeholder='Enter your name' />
//     //   <button className='px-4 py-3 text-white text-xl m-5 font-semibold bg-emerald-300 rounded'>Submit</button>
//     //  </form>
//     //   </div>
//     <div>
//       <form onSubmit={(e) => submitHandler(e)}>
//         <input
//         value={username}
//         onChange={(e) => {
//           // changeUser(e.target.value);
//           // console.log(e.target.value);//whatever we type in the input field will be printed in the console
//           changeUsername(e.target.value);//we can also use this to set the username state to the value of the input field
//         }}
//         className='px-4 py-3 rounded m-5'
//         type="text"
//         placeholder='Enter your name'
//         />
//       <button className='px-4 py-3 text-white text-xl m-5 font-semibold bg-emerald-300 rounded'>Submit</button>
//      </form>
//       </div>




//   )}


// export default App

//
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App =  () => {
//   const[data,setData]=useState([])
//   const getData= async ()=>{
//     const response = await axios.get("https://picsum.photos/v2/list")
//     setData(response.data);
//     // console.log(data);

//   }
//   useEffect(() => {
// getData();
//   }, [])

//   return (
//     <div className='p-10'>
//       {/* <button onClick={getData} className='bg-teal-700 text-white rounded font-semibold text-2xl py-4 px-3 active:scale-90'>Get Data</button> */}
//       <div className='p-5 bg-gray-950 mt-5'>{data.map(function(item,idx){

//        return <div key={idx} className='bg-gray-500 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//           <img className='h-30'src={item.download_url} alt="" />
//           <h1>{item.author}</h1>
//         </div>
//       })}</div>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Header from './components/Header.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/home' element={<Home />} />


      </Routes>
    </div>
  )
}

export default App