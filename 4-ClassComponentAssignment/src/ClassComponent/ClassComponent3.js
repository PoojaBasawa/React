import React from 'react'

class ClassComponent3 extends React.Component {
    render() {
        return (
            <>
                <div style={{height:"400px",width:"50%",
                    boxShadow:"0px 0px 10px black",textAlign:"center",
                    padding:"10px",textTransform:"upppercase",marginTop:"20px"}}>
                    <h1>Class Component 3</h1>
                    <ClassComponentchild1/>
                    <div style={{display:"flex",gap:"10px"}}>
                        <ClassComponentchild2/>
                        <ClassComponentchild3/>
                    </div>
                </div>
            </>
        )
    }
}

class ClassComponentchild1 extends React.Component {
    render() {
        return(
            <>
                <div style={{height:"30px",width:"95%",
                boxShadow:"0px 0px 10px black",textAlign:"center",
                padding:"10px",textTransform:"upppercase",marginTop:"20px"}} >
                    <h3>Class Component 1</h3>
                </div>
            </>
        )
    }
}

class ClassComponentchild2 extends React.Component {
    render() {
        return(
            <>
                <div style={{height:"200px",width:"50%",
                boxShadow:"0px 0px 10px black",textAlign:"center",
                padding:"10px",textTransform:"upppercase",marginTop:"20px"}}>
                    <h3>Class Component 2</h3>
                </div>
            </>
        )
    }
}

class ClassComponentchild3 extends React.Component {
    render() {
        return(
            <>
                <div style={{height:"200px",width:"50%",
                boxShadow:"0px 0px 10px black",textAlign:"center",
                padding:"10px",textTransform:"upppercase",marginTop:"20px"}}>
                    <h3>Class Component 3</h3>
                </div>
            </>
        )
    }
}

export default ClassComponent3