export default function Header(){
  return (<>
  <h1>Defaul Import and export</h1></>
  )
}
// export default Header;

//now we are going to named export 

export function Card(){
  return(<>
  <h2>this is named import and export</h2>
  </>
  )
}


//another card
export function Card1(){
  return(<>
  <h2>this is named import and export</h2>
  </>
  )
}


//we can also use destructuring concept here to export multiple  component from one file

//export{Card,Card1}