import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext.jsx'

const Header2 = () => {
  const username = useContext(DataContext);

  return (
    <div>
      <h1>Header2 {username.name}</h1> {/* ✅ FIX */}
    </div>
  )
}

export default Header2;