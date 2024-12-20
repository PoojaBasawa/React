import React, {useState} from 'react'
import './example9.css'

function Example9() {
    return(
        <>
            <div id="header">
                <h1>Course Registration Form</h1>
            </div>
            <div id="in">
                <fieldset>Personal Information
                    <br/><br/>
                    <label>First Name: </label> 
                    <br/>
                    <input type="text"></input>
                    <br/><br/>
                    <label>Last Name: </label> 
                    <br/>
                    <input type="text"></input>
                    <br/><br/>
                    <label>Mobile Number: </label> 
                    <br/>
                    <input type="number"></input>
                    <br/><br/>
                    <label>Password: </label> 
                    <br/>
                    <input type="text"></input>
                    <br/><br/>
                    <label>Confirm Password: </label> 
                    <br/>
                    <input type="text"></input>
                    <br/><br/>
                    <label>DOB: </label> 
                    <br/>
                    <input type="calander"></input>
                    <br/><br/>
                    <label>Gender </label> 
                    <br/>
                    <input type="radio"></input>
                    <label>Male</label>
                    <input type="radio"></input>
                    <label>Female</label>
                    <input type="radio"></input>
                    <label>Other</label>
                    <br/><br/>
                    <label>Select State:</label> 
                    <br/>
                    <select id="op">
                        <option>Karnataka</option>
                        <option>Andhra Pradesh</option>
                        <option>Telangana</option>
                    </select>
                    <br/><br/>
                    <input type="date"></input>
                    <br/><br/>
                   

                </fieldset>
            </div>
        </>
    )
}

export default Example9