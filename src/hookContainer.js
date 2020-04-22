import React,{useState} from 'react';
import HookMouse from './HookMouse.js'
export default function MouseContainer(){
	const [display,setDisplay]=useState(true);
	return <div>
		<button onClick={()=>setDisplay(!display)}>Toggle</button>
		{display && <HookMouse/>}
	</div>

}
