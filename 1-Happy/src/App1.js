import React from 'react'
function App() {
    let style={
        color:"brown",
        textAlign:"center",
        border:"5px dashed green"
    }
    return(
        <>
            <h2>1st way of declaring inline CSS</h2>
            <h1 style={{color:"brown", textAlign:"center",border:"5px dashed green"}}>Welcome to Patagonspace</h1>
            <h2>2nd way of declaring inline CSS</h2>
            <p style={style}>Same style is applied</p>
            <p style={style}>The main advantage is that same property can be added to the multple tags.</p>
        </>
    );
}