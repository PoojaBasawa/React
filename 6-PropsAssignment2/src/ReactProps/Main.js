import React from 'react';
import './main.css'

class Header extends React.Component {
    render(){
        return(
            <>
                <div class="parent">
			        <div class="child">
                        <img src="./Images/virat.jpg"></img>
                        <h2>Name: {this.props.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.</p>
                        <button>Click Here</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Header