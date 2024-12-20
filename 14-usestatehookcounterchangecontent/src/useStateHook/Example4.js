// Object value change from old to new value
// Perticular value is changing

import React from 'react'
import {useState} from 'react'

function Example4() {
    const[data,setData]=useState({name:"Virat",age:36,city:"Bengaluru"})
    let handleClick=()=>{
        // ...(3 dots) called spreads operator perticular changing only name value
        setData({...data,name: "sachin"})
    }
    return(
        <div>
            <h1>My name is {data.name}</h1>
            <h2>I am from {data.city}</h2>
            <h3>I am {data.age} years old</h3>
            <button onClick={handleClick}>Change Data</button>
        </div>
    )
}

export default Example4 