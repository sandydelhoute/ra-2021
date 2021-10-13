import {useReducer} from 'react'
const countReducer =(oldState,newState)=>newState
const Counter = ({initialCount=0,step=1})=>{
    const [count,SetCount]= useReducer(countReducer,initialCount)
    const increment = ()=>SetCount(count+step);
    return <button className='btn btn-secondary' onClick={increment}>{count}</button>
}
export const UseReducer= ()=><Counter/>  

