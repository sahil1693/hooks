import React,{useRef,useState,useEffect} from 'react'

export default function Counter(){
	const [timer,setTimer]=useState(0)
	const intervalRef=useRef(null)
	useEffect(()=>{
	intervalRef.current= setInterval(()=>{setTimer(prevtimer=>prevtimer+1)},1000)
	return ()=>{
		clearInterval(intervalRef.current);
	}
	},[]);
	return (
	<div>
	Hook Timer - {timer}
	<button onClick={()=>clearInterval(intervalRef.current)}>Clear hook timer</button>
	</div>
	)
}
