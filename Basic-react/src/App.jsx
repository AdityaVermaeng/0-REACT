// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Nav from './Navbar'
// import Item from'./components/Item'
// import ItemDate from './components/ItemDate'
// function App() {
  
//   return (
//     <>
//       <div>
//         <h1>Hello React</h1>
//         <Nav/> 
//       </div>
//     <Item/>
    
    
     
//     </>
//   )
// }

// export default App
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [isLoggedIn,setLoggedIn]=  useState(false)
//   return (
//     <>
//   {!isLoggedIn}
//    ;</>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'

function App() {
  const [items,setItems]=useState(["Banana","graps","mango"]);
  return (
    <>
      <ul>
        {items.map((item,index)=> (<li key={index}>
        {item}
        </li>))}
      </ul>
    </>
  )
}

export default App


