import React, { useState } from 'react'
import {useEffect} from 'react'
import './example1.css'
function Example1() {
   const[count,setCount]= useState(0)
   useEffect(()=>{
    document.title=`the count is ${count}`  
    //above lin is "side effect code"
    return ()=>{
        console.log("Your code has been cleaned")
    }
   },[count]
    //When count is linked then it should work
)

   const incrementValue=()=>{
setCount((prev)=>prev+1)
   }
   const RestValue=()=>{
setCount(0)
   }
   const decrementValue=()=>{
  setCount((prev)=>prev-1)
   }
  return (
    <div>
      <center><h1>Counter App</h1></center>
      <div className='container'>
        <h2>The Counter Value is : {count}</h2>
        <div>
        <button className='btn1' onClick={incrementValue}>Increment</button>
        <button className='btn2' onClick={RestValue}>Reset</button>
        <button className='btn3' onClick={decrementValue}>Decrement</button>
       </div>
      </div>
    </div>
  )
}

export default Example1