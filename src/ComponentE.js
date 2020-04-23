import React,{useContext} from 'react'
import {userContext,channelContext} from './App'
export default function ComponentE(){
	const user = useContext(userContext)
	const channel = useContext(channelContext)
	return (
	<div>User Context{user}, ChannelContext{channel}</div>
	)
}
