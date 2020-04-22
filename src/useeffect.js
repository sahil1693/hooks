import React,{useState,useEffect} from 'react';

export default function Useeffect(){
	const [count,setcount] = useState(0);
	useEffect(()=>{
	document.title=`You Click ${count} times`;
	},[count])   //here [count] the second perimeter mean the useEffect method called when count value change otherwise not and an empty array mean that the useeffect effect call only first render time not alwaysk
	return (
		<div>
			<button onClick={()=> setcount(count+1)}>Click {count} times</button>
		</div>
	
	)
}
