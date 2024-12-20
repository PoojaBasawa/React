import React from 'react'
// import Example1 from './ConditionalRendering/Example1';
// import Logout from './ConditionalRendering/Logout';
// import Login from './ConditionalRendering/Login';
// import Example2 from './ConditionalRendering/Example2';
// import Example3 from './ConditionalRendering/Example3';
// import Example4 from './ConditionalRendering/Example4';
import Example5 from './ConditionalRendering/Example5';
// import Assignment from './Assignment/FrontendPage';

function App() {
  return (
    <>
      {/* Enter here one time true & one time false, look at output */}
      {/* <Example1 name="Virat" isloggedIn={false}/>  */}
      {/* <Example1 name="Sachin" isloggedIn={true}/> */}
      {/* <Example2  isloggedIn={true}/> */}
      {/* <Example3 isloggedIn={false}/> */}
      {/* <Example4 isloggedIn={true}/> */}
      <Example5 booleanValue={true}/>
      {/* Example5 - If you enter false - No Output - Bcz && operator has only true statement */}
      <div>
        {/* <FrontendPage isValue={true}/> */}
      </div>
    </>
  );
}

export default App;