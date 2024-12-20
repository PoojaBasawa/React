// one compoenet only one state
import React from 'react'

class Example1 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React JS class",
            name:"Pooja",
            age:"99",
            city:"Bangalore",
            branch:"EEE"
        }
    }
    render() {
        return(
        <>
            <h1>This is state</h1>
            <h2>My name is {this.state.name}</h2>
            <h3>I am {this.state.age} years old</h3>
            <h4>I am from {this.state.city}</h4>
            <h4>I graduated in {this.state.branch} branch </h4>
        </>
        )
    }
}

export default Example1