import React,{Component,useReducer,useContext} from 'react'
import C from './C';
import D from './D';
export const CountContext = React.createContext(); 
const initialState=0
const reducer = (state,action)=>{
	switch(action){
	
	case 'increment': return state+1
	case 'decrement':return state-1
	case 'reset' : return initialState
	default:
	 return state
	}

}
export default function Main(){
	const [count,dispatch]=useReducer(reducer,initialState);
		return <div>
		<CountContext.Provider value={{countState: count, countdispatch:dispatch}}>
		<C/>
		<D/>
		</CountContext.Provider>
		Count : {count}
		
		</div>
	
}
