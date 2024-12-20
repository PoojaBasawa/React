import React from 'react'
import "./cards.css"
function Cards(props) {
  return (
    <>
      <main className="parent">
        <div className="child">
          <img src={props.image} alt="no image"/>
          <h2>{props.name}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.  </p>
          <button>Profile details</button>
        </div>
      </main>
    </>
  )
}

export default Cards