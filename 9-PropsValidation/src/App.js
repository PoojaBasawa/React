import React from 'react'
// import Example1 from './ReactState/Example1'
// import Example2 from './ReactState/Example2'
import Validation from './PropsValidation/Validation'

function App() {
  const handleClick=()=>
  alert("I am arrow function")
  return(
    <>
      <Validation name="Pooja" age={30} isStudent={false} click={handleClick} />
        {/* click={handleClick} */}
        {/* <Example1/> */}
        {/* <Example2/> */}
    </>
  )
}

export default App