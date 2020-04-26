import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Data_fetch(){
	const [loading,setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [post, setpost] = useState({});
	
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts/1')
		.then((post)=>{
		setLoading(false);
		setpost(post.data)
		setError(false);
		})
		.catch((error)=>{
		setLoading(false);
		setpost({})
		setError(true);
		})
	},[]);
	return (<div>
	{loading?'Loading ...':post.title}
	{error ? 'Error':null}
	
	</div>)
}
