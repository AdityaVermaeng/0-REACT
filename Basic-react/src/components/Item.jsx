import"./Item.css"
import ItemDate from "./ItemDate";
function Item(){
  const res=[{
    day:21,
    month:"june",
    year:2003
  },
  {
    day:23,
    month:"july",
    year:2004
  }]
  return (<p className="item-text">Aditya
  <ItemDate day={res[0].day} month={res[0].month}  year={res[0].year}/>
  <ItemDate day={res[1].day} month={res[1].month}  year={res[1].year}/>
  
  </p>);
  
  
}
export default Item;