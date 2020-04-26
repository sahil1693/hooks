import React,{useState,useMemo} from 'react'

export default function Main(){
	const [counterone,setcounterone]=useState(0)
	const [countertwo,setcountertwo]=useState(0)
	const incrementOne=()=>{
	setcounterone(counterone+1)
	}
	const incrementTwo=()=>{
	setcountertwo(countertwo+1)
	}
	const isEven=useMemo(()=>{
	var i=0;
	while(i<200000000) i++
	return counterone%2 === 0
	},[counterone])
	return (
	<div>
	<button onClick={incrementOne}>Count One -{counterone}</button>
	<span>{isEven ? 'Even': 'Odd'}</span>
	<button onClick={incrementTwo}>Count two - {countertwo}</button>
	</div>
	)
}
