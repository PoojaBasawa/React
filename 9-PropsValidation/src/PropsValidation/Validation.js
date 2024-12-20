// Before install the this library
// PS C:\Users\Pooja\OneDrive\Desktop\React\practice> npm install prop-types
// npm start
// Check output in console

import React from 'react'
import PropTypes from 'prop-types'
function Validation({name,age,isStudent,click}) {
  return (
    <>

      <h1>My name is {name}</h1>
      <p>I am {age} years old</p>
    <h3>{isStudent?"student":"not a student"}</h3>
    <button onClick={click}>Click here</button>
    </>
  )
}
Validation.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
    click:PropTypes.func
}
export default Validation