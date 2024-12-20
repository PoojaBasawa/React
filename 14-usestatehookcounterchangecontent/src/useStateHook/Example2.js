// {useState} - dynamic user Interface
// Whole Content Changes

import React from 'react'
import {useState} from 'react'

function Example2() {
    const[state,setState]=useState("Welcome to Pentagaonspace")
    const[isplaced,setIsplaced]=useState(true)
    const[data,setData]=useState({name:"Virat",age:36})

    let handleClick=()=>{
        setState("Thank you for visiting")
        setIsplaced(false)
        setData({name:"Sachin",age:27})
    }        
    return(
        <div>
            <h1>{state}</h1>
            {isplaced?<p>Yes</p>:<p>No</p>}
            <h3>My name is {data.name}, I am {data.age} year old</h3>
            <button onClick={handleClick}>Change Content</button>
        </div>
    )
}

export default Example2