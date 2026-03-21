import React, { useState } from 'react'

const App = () => {
  let user = "Aditya"
  const [username, changeUser] = useState(user);

  const changeName = () => {
    changeUser("Virat");
  }

  return (
    <div>
      <h1>Username is {username}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default App