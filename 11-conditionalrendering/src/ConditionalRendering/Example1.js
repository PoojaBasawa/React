// 2/12/2024

//Conditioanlly rendering elements in react
//Example1 - Component Rendering
import React from 'react'

function Example1(props){
    if(props.isloggedIn){
        return <h1>Welcome user {props.name}</h1>
    }
    else{
        return <h1>Please log in again!!</h1>
    }
}

export default Example1 