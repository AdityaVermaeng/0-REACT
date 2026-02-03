import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Navbar'
import Item from'./components/Item'
import ItemDate from './components/ItemDate'
function App() {
  
  return (
    <>
      <div>
        <h1>Hello React</h1>
        <Nav/> 
      </div>
    <Item/>
    
    
     
    </>
  )
}

export default App
