import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: 0</p>
      <button>INCREMENT</button>
      <button>DECREMENT</button>
      <button>RESET</button>
    </>
  )
}

export default App
