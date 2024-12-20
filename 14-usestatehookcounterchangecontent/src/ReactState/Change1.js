import React from 'react'

class Change1 extends React.Component{
    constructor() {
        super()
        this.state={
            message:"GoodMorning"
        }
    }

    changeContent() {
        this.setState({
            message:"GoodNight"
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeContent()}>Click Here</button>
            </>
        )
    }
}

export default Change1