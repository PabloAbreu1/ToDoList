import React, {useState} from "react";



//create your first component
const Home = () => {

	const[lista,setLista]=useState([])
	const[seved,setSeved]=useState("")

	// function handlelista(e) {
	// 	console.log(e.target.value)
	// 	setlista(e.target.value)
	// }

	const guardarTarea=(e)=>{
		e.preventDefault()
		setSeved("")
		setLista([...lista, { id: lista.length, name: seved }])
	}

console.log(lista)
console.log(seved)

const borrar =(id)=>{
setLista(lista.filter((item) => item.id !== id));

	
}

return (
<>
<h1 className="d-flex justify-content-center">ToDoList</h1>
<form className="container" onSubmit={guardarTarea}>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    {/*2. definimos el evento ochange en el input */}
	<input 
	type="text" 
	className="form-control" 
	id="exampleInputEmail1" 
	aria-describedby="emailHelp" 
	onChange={(e)=>{setSeved(e.target.value)}}/>
</div>

  <ul className="list-group">
  {lista.map((item)=>(<li className="list-group-item" key={item.id}>{item.name}<button type="button" className="btn btn-outline-light" onClick={(()=>borrar(item.id))}>X</button></li>))}

  </ul>
  

</form>

</>
	);
};

export default Home;
