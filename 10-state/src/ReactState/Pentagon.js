// Use App3.js(Absent)[SSC Navy exam] - 28/11/24

import React from "react";

class Pentagon extends React.Component{
    render(){
        return(
            <>
            <h3>This child component</h3>
            <h5>{this.props.content}</h5>
            <button onClick={this.props.click}>Click here</button>
            </>
        )
    }
}

export default Pentagon