import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext.jsx'

const Section = () => {
  const userData = useContext(DataContext);

  return (
    <div>
      <h1>Section {userData.age}</h1> {/* ✅ FIX */}
    </div>
  )
}

export default Section;