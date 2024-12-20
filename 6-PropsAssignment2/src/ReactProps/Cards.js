import React from 'react'
import Main from './Main';

class Cards extends React.Component{
    render(){
        return(
            <>
                <Main img="Virat.jpg" name="Virat"/>
                <Main img="Raina.jpg" name="Raina"/>
                <Main img="Rohit.jpg" name="Rohit"/>
            </>
        )
    }
}

export default Cards