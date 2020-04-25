import React from 'react';
import './App.css';
import Hooks from './App.test.js'
import Name from './name.js'
import Useeffect from './useeffect.js'
import HookContainer from './hookContainer'
import DataFetching from './dataFetching.js' 
import ComponentD from './ComponentD'
import UseReducerone from './useReducerone'
import UseReducertwo from './useReducertwo'
import Main from './combine_usereducer_&_usecontext/Main.js'
export const userContext = React.createContext()
export const channelContext = React.createContext()
function App() {

  return (
    <div className="App">
        </*userContext.Provider value={'userContext'}*/>
    </*channelContext.Provider value={'channelContext'}*/>
	</*ComponentD/*/>	
	</*/channelContext.Provider*/>
	</*/userContext.Provider*/>
	</></></></></>
	</*UseReducertwo/*/></>
	<Main/>
    </div>
  );
}

export default App;
/*
To interact with multiple nested component like

		A
|	|	|
B	C	D
		|
		E
		|
		F
		
Now to pass the value name to different nested component we have to pass the value as props and it is difficult task if we have mulitiple nested component. To do the same we can use contextSwitch 

export const userContext=React.createContext()

class App extends Component{
	render(){return <div>
	<userContext.Provider value={'sahil'}>
	<componentD/>
	</userContext.Provider>
	</div>
	}
} 

in component f

import {userContext} from './app'
class ComponentF extends Component{
	render(){
	return<div>
	
	<userContext.Consumer>
	{
	user =>{
		return <div> User context value {user}</div>
	}
	}
	</userContext.Consumer>
	</div>
	
	}
}


And to pass multiple context value

export const userContext=React.createContext()
export const channelContext=React.createContext()
class App extends Component{
	render(){return <div>
	<userContext.Provider value={'sahil'}>
	<channelContext.Provider value={'contextvalue'}>
	<componentD/>
	</channelContext.Provider>
	</userContext.Provider>
	</div>
	}
} 

in component f

import {userContext,channelContext} from './app'
class ComponentF extends Component{
	render(){
	return<div>
	
	<userContext.Consumer>
	{
	user =>{
		return (
		<channelContext.Consumer>
		{
			channel =>{
				return (
					<div> User context value {user} Channel context value {channel}</div>
				)
			}
		}
		</channelContext.Consumer>
		)
	}
	}
	</userContext.Consumer>
	</div>
	
	}
}

*/

