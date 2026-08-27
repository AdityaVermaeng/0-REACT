import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
 let [count,setCount] =useState(0);
  function increment(){
    count=count+1;
    setCount(count);

  }
  function decrement(){
    count=count-1;
    setCount(count);
  }
  function reset(){
    setCount(0);
  }
  return (
    
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <div className='btn'>
        <button onClick={increment}>➕ INCREMENT</button>
        <button onClick={decrement}>➖ DECREMENT</button>
        <button onClick={reset}>✖️ RESET</button>
        </div>
    </>
  )
}

export default App
