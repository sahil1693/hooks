import React,{useReducer} from 'react'

const initialState={
	firstinitialstate:0,
	secondinitialstate:0
};
const reducer =(state,action) =>{
	switch(action.type){
	case 'Increment' : return {firstinitialstate:state.firstinitialstate+1};
	case 'decrement' : return {firstinitialstate:state.firstinitialstate -1};
	case 'Reset' : return initialState;
	default:
	return state;
	}
}
const reducertwo =(state,action) =>{
	switch(action.type){
	case 'Increment' : return {secondinitialstate:state.secondinitialstate+1};
	case 'decrement' : return {secondinitialstate:state.secondinitialstate -1};
	case 'Reset' : return initialState;
	default:
	return state;
	}
}
export default function CounterTwo(){
	const [count,dispatch]=useReducer(reducer,initialState);
	const [counttwo,dispatchtwo]=useReducer(reducertwo,initialState);
	return (
		<div>
		Count1 : {count.firstinitialstate}
		<button onClick={()=>dispatch({type:'Increment'})}>Increment1</button>
		<button onClick={()=>dispatch({type:'decrement'})}>decrement1</button>
		<button onClick={()=>dispatch({type:'Reset'})}>Reset1</button>
		Count2 : {counttwo.secondinitialstate}
		<button onClick={()=>dispatchtwo({type:'Increment'})}>Increment1</button>
		<button onClick={()=>dispatchtwo({type:'decrement'})}>decrement1</button>
		<button onClick={()=>dispatchtwo({type:'Reset'})}>Reset1</button>
		</div>
	
	)
} 
