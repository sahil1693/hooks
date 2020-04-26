import React,{useState,useEffect} from 'react'
import useDocumentTitle from './useDocumentTitile.js'
export default function CounterTwo(){

	const [count,setCount]=useState(0)
	useDocumentTitle(count);
	return (
	<div>
		<button onClick={()=>{setCount(count+1)}}>CounterTwo -{count}</button>
	</div>
	)

}
