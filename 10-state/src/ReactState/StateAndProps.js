// Use App3.js(Absent)[SSC Navy exam] - 28/11/24
// StateAndProps-We can change the sentence by clicking on the button

import React from "react";
import Pentagon from "./Pentagon";

class StateAndProps extends React.Component{
    constructor(){
        super()
        this.state={
            message:"welcome to pentagonspace"
        }
    }
    changeContent(){
        this.setState({
            message:"Thank you for visiting"
        })
    } 
    render(){
        return(
            <>
                <h1>This Example for State And Props</h1>
                <Pentagon content={this.state.message} click={()=>this.changeContent()}/>
            </>
        )
    }
}

export default StateAndProps