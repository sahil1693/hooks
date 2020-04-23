import React,{useReducer} from 'react'

const initialState=0;
const reducer =(state,action) =>{
	switch(action){
	case 'Increment' : return state+1;
	case 'decrement' : return state -1;
	case 'Reset' : return initialState;
	default:
	return state;
	}

}
export default function CounterOne(){
	const [count,dispatch]=useReducer(reducer,initialState);
	return (
		<div>
		Count : {count}
		<button onClick={()=>dispatch('Increment')}>Increment</button>
		<button onClick={()=>dispatch('decrement')}>decrement</button>
		<button onClick={()=>dispatch('Reset')}>Reset</button>
		</div>
	
	)
} 
