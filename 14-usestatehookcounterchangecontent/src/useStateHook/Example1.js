import React from 'react'
import {useState} from 'react'

function Example1() {
    // const or let
    const[state,setState]=useState(100)
    let[name,setName]=useState("Raj")
    const[isplaced,setIsplaced]=useState(true)
    const[data,setData]=useState({name:"Virat",age:36})
    const[empty,setEmpty]=useState("________")

    return(
        <div>
            <h1>{state}</h1>
            <h2>My name is {name}</h2>
            {isplaced?<p>Yes</p>:<p>No</p>}
            <h3>My name is {name.name}, I am {data.age} year old.</h3>
            <h4>The data is {empty}</h4>
        </div>
    )
}

export default Example1