import React from 'react'
  let name1="Im Outside"
function App() {
    let name2="Im Inside"
    return(
        <>
            <h1>{name1}Inside</h1>
            <p>{name2}Outside</p>
        </>
    );
}