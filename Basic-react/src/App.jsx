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
// import React from 'react'
// import { useState } from 'react'
// import Data from './hooks/Data';

// function App() {
//   const [items,setItems]=useState(["Banana","graps","mango"]);
//   return (
//     <>
      {/* <ul>
        {items.map((item,index)=> (<li key={index}>
        {item}
        </li>))}
      </ul> */}
      // <Data/>
//     </>
//   )
// }

// export default App



import React from 'react'

const age = 18;

const App = () => {
  let arr = ["spiderMan", "ironMan", "thor", "Wanda", "black Panther"];

  return (

    <div>
      {/* <h1 style={{
  maxWidth:"1240px",
  margin:"0 auto",
  width:"100%",
  padding:"2rem",
  textAlign:"center",
  backgroundColor:"yellow"
}}>Hello inline CSS</h1> */}
      {/* Conditional Rendering */}
      {age > 18 ? <h1>Adult</h1> : <h1>Child</h1>}

      {/* List Rendering */}
      {arr.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  )
}

export default App



