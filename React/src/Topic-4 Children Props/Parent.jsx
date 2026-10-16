import Card from "./Card"

const Parent = () => {
	return (
		<div>
    {/* <Card>
	         <h1>Hello</h1>
					 <h2>Developers</h2>
   </Card> */}
	 {/* Default props */}
	 <Card
	    fullname={"Virat Kohli"}
	    age={37}
	    team={"India"}
	    />
			<Card />
		</div>
	)
}

export default Parent
