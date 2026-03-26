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

import React, { useState } from 'react'

const App = () => {
  const [username, changeUsername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("username is ", username);
    changeUsername("");//after submitting the form, we want to clear the input field, so we set the username state to an empty string 

    // alert("Form Submitted");
    }

  return (  // <div>
    //  <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center h-screen'>
    //    <input className='px-4 py-3 rounded m-5' type="text" placeholder='Enter your name' />
    //   <button className='px-4 py-3 text-white text-xl m-5 font-semibold bg-emerald-300 rounded'>Submit</button>
    //  </form>
    //   </div>
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
        value={username}
        onChange={(e) => {
          // changeUser(e.target.value);
          // console.log(e.target.value);//whatever we type in the input field will be printed in the console
          changeUsername(e.target.value);//we can also use this to set the username state to the value of the input field
        }}
        className='px-4 py-3 rounded m-5'
        type="text"
        placeholder='Enter your name'
        />
      <button className='px-4 py-3 text-white text-xl m-5 font-semibold bg-emerald-300 rounded'>Submit</button>
     </form>
      </div>




  )}


export default App