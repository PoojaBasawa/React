// #Example1.js

// import React from 'react'
// import Example1 from './ReactProps/Example1';

// function App() {
//   return (
//     <>
//       <Example1 name="Raj" age="22" city="Bangalore"
//       isStudent={false}/>
//       <Example1 name="viart" age="36" city="Mysore"
//       isStudent={true}/> 
//     </>
//   );
// }

// export default App;

// #Example2.js

// import React from 'react'
// import Example2 from './ReactProps/Example2';

// function App() {
//   return (
//     <>
//       <Example2 name="Raj" age="22" city="Bangalore"
//       isStudent={false}/>
//       <Example2 name="sachin"  age="16"  city="kolar"
//       isStudent={true}/>
//     </>
//   );
// }

// export default App;

// #PropsFunction

import React from 'react'
// import ParentComponent from './PropsFunction/ParentComponent';
import ChildComponent from './PropsFunction/ChildComponent';


function App() {
  return (
    <>
      {/* <ParentComponent/> */}
      <ChildComponent/>
    </>
  );
}

export default App;