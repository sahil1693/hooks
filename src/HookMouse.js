import React,{useState,useEffect} from 'react';
export default function HookMouse(){
	const [x,setx]=useState(0)
	const [y,sety]=useState(0)
	const logMouseOption = e =>{
		setx(e.clientX);
		sety(e.clientY);
	}
	useEffect(()=>{
		window.addEventListener('mousemove',logMouseOption);
		return ()=>{
		window.removeEventListener('mousemove',logMouseOption);  //this will run during component will unmount
		}
	},[])
	return (
		<div>
		Hooks X -{x} - {y}
		</div>
	)

}
