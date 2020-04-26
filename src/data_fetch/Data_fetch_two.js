import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
	loading:true,
	error:'',
	post:{}
}
const reducer=(state,action)=>{
	switch(action.type){
	
	case 'FETCH_SUCCESS' : 
		return {
		loading:false,
		post:action.payload,
		error:''
		}
	case 'FETCH_FAILURE' : 
		return {
			loading:false,
			post:{},
			error:'Error'
		}
	case 'FETCH_ERROR' :
		return {
			loading:false,
			post:{},
			error:'Error'
		}
	default:
	return state
	}
}

export default function DataFetchTwo(){
	const [state,dispatch]=useReducer(reducer,initialState);
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then((post)=>{
		dispatch({type:'FETCH_SUCCESS',payload:post.data});
		})
		.catch((error)=>{
		
		dispatch({type:'FETCH_FAILURE'});
		})
	},[]);
	return (
	<div>
	{
	state.loading ? 'Loading ...':state.post.title
	}
	{state.error ? state.error:null}
	</div>
	)
}
