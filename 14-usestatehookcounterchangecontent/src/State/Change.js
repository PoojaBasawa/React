import React from 'react'

class Change extends React.Component{
    constructor(){
        super()
        this.state={
            message: "Good Afternoon"
        }
    }

    #method

    changeContent(){
        this.setState({
            message: "Good Evening"
        })
    }

    render() {
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeContent()}>Click Here</button>
            </>
        )
    }
}

export default Change