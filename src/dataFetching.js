//Data fetching using useEffect method

import React,{useState,useEffect} from 'react';
import Axios from 'axios';
export default function DataFetching(){
	const [posts,setposts] = useState([]);
	useEffect(()=>{
		Axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((res)=>{
		console.log(res);
		setposts(res.data);
		})
		.catch((err)=>{
		console.log(err);
		})
	},[])
	return (
	<>
	<ul>
	{posts.map(post=><li key={post.id}>{post.title}</li>)}
	</ul>
	</>
	
	)
}
