import React from 'react'

class ClassComponent1 extends React.Component { 
    render() {   
        return (
            <>
                <div style={{height:"70px",width:"100%",
                    boxShadow:"0px 0px 10px black",textAlign:"center",
                    padding:"10px",textTransform:"upppercase",marginTop:"20px"}}>
                    <h1>Class Component 1</h1>
                </div>
            </>
        )
    }
}

export default ClassComponent1