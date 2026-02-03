function ItemDate(props){
  const day=props.day;
  const month=props.month;
  const year=props.year;
  return(<div>
    <h3 className="dob">{day}{month}{year}</h3>
  </div>
  )
  
}
export default ItemDate; 