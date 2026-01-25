import ItemDate from './components/ItemDate'
function Nav() {
    const response=[{
        name:"Aditya",
        age:23,
        isLoggedIn:true
    },
    {
        day:26,
        month:"january",
        year:2026
    }]
    return ( 
    <div> 
        <h1> My name is {response[0].name} and i am {response[0].age} year old.</h1>
        <h2>I am Learning React from scratch</h2>

        <h3>Status:{response[0].isLoggedIn?"Logged in":"Logged out"}</h3>
        <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}/>
    </div>
)
 }
 export default Nav;