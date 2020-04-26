import React,{useCallback,useEffect,useReducer,useState} from 'react';
import Title from './Title'
import Count from './Count'
import Button from './Button'

export default function Main(){
	const [age,setAge]=useState(25)
	const [salary,setSalary]=useState(5000)
	const incrementAge=useCallback(()=>{
	setAge(age+1);
	},[age])
	const incrementSalary=useCallback(()=>{
	setSalary(salary+1000);
	},[salary])
	//useCAllback called only when there is change in the dependency
	return(
	<div>
	<Title />
	<Count text="Age" count={age}/>
	<Button handleClick={incrementAge}>Increment Age</Button>
	<Count text="Salary" count={salary}/>
	<Button handleClick={incrementSalary}>Increment Salary</Button>
	</div>
	)
}
