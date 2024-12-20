import React from 'react'
import Component1 from './foodproject/Component1'
import Component2 from './foodproject/Component2'
import Component3 from './foodproject/Component3'
import Component4 from './foodproject/Component4'
import Component5 from './foodproject/Component5'

function App() {
  return(
      <>
        <div>
          <Component1/>
        </div>
        <div style={{display:"flex", gap:"0px"}}>
          <Component2/><Component3/>
        </div>
        <div>
          <div style={{display:"flex", gap:"0px"}}>
            <Component4/> <Component5/>
          </div>
        </div>
      </>
    )
}

export default App