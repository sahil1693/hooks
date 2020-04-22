import React,{useState} from 'react';

export default function Hooks(){
	const [name, setName]=useState({firstName:'',lastName:''})  //inital value can be anything 
	return (
		<form>
			<input type= "text" value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
			<input type="text" value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
			<h2>{name.firstName}</h2>
			<h2>{name.lastName}</h2>
		</form>
	)
}

