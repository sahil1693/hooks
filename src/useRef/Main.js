import React,{useRef,useEffect} from 'react'

export default function Main(){
	const inputRef=useRef(null)
	useEffect(()=>{
	
	inputRef.current.focus()
	},[])
	return <div>
	<input type="text" ref={inputRef}/>
	</div>
}
