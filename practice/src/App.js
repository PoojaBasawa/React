// import React from 'react'
// import Example9 from './Example9'
// import Example8 from './Example8'
// import Example7 from './Example7'
// import Example10 from './Example10'
// import Example1 from './useEffectHook/Example1'
// import Example1 from './ProfileChange/Example1'

// function app() {
//     return(
//         <>
//             {/* <Example7/> */}
//             {/* <Example8/> */}
//             {/* <Example9/> */}
//             {/* <Example10/> */}
//             {/* <Example1/> */}
//             <Example1/>
//         </>
//     )
// }

// export default app

// import React from 'react'
// import Nav from './Nav/Nav'
// import About from './Nav/About'
// import Profile from './Nav/Profile'
// import Login from './Nav/Login'
// import Signup from './Nav/Signup'
// import { BrowserRouter } from 'react-router-dom'

// function App() {
//     return(
//         <>
            
//             <BrowserRouter>
//             <Nav/>
//                 <Routes>
//                     <Route path="/" element={3<Home/>}></Route>
//                     <Route path="/about" element={<About/>}></Route>
//                     <Route path="/profile" element={<Profile/>}></Route>
//                     <Route path="/login" element={<Login/>}></Route>
//                     <Route path="/signup" element={<Signup/>}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App

import React from 'react'
import Heading from './weatherproject/Heading'
import Weather from './weatherproject/Weather'

function App() {
  return (
    <div>
      <Heading/>
      <Weather/>
    </div>
  )
}

export default App
