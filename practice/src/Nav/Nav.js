import React from 'react'
import './nav.css'

function Nav(){
    <div>
        <div className="heading">
            <h1>React Router Example</h1>
        </div>
        <nav>
            <Link to="/" className='nav-items'>Home</Link>
            <Link to="/about" className='nav-items'>About</Link>
            <Link to="/profile" className='nav-items'>Profile</Link>
            <Link to="/login" className='nav-items'>Loginin</Link>
            <Link to="/signup" className='nav-items'>Signup
            </Link>
        </nav>
    </div>
}

export default Nav