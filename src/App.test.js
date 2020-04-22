import React,{useState} from 'react';

export default function Hooks(){
	const [count,inccount]=useState(0);   //inccount is a function to change the value of count
	//const [name, setName]=useState({firstName:'',lastName:''})  //inital value can be anything 
	return (
		<button onClick={()=>{inccount(prevcount => prevcount+1)}}>click {count}</button>
	)
}

