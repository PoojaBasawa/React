import React from 'react'

class ClassComponent4 extends React.Component {
    render() {
        return (
            <>
                <div style={{height:"150px",width:"100%",
                    boxShadow:"0px 0px 10px black",textAlign:"center",
                    padding:"10px",textTransform:"upppercase",marginTop:"20px",}}>
                    <h1>Class Component 4</h1>
                    <ClassComponentchild1/>
                </div>
            </>
        )
    }
}

class ClassComponentchild1 extends React.Component {
    render() {
        return(
            <>
                <div style={{height:"30px",width:"70%",
                boxShadow:"0px 0px 10px black",textAlign:"center",
                padding:"10px",textTransform:"upppercase",margin:"10px auto"}}>
                    <h3>Class Component 1</h3>
                </div>
            </>
        )
    }
}
export default ClassComponent4