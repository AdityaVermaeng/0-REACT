import {useState} from 'react'
import './App.css'
function App() {
let [counter,setCounter]=useState(25);
  // let counter=25;

  const increase=()=>{
    setCounter(counter + 1);
  }
  const decrease=()=>{
    setCounter(counter - 1);
  }
  return (
    <>
    <h1>Hello React</h1>
    <h2>Basic Counter: {counter} </h2>
    <button
    onClick={increase}> add Value</button>
    <br/>
    <button
    onClick={decrease}> remove Value</button>

    </>
  )
}

export default App
