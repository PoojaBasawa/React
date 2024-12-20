import React from 'react'

import ClassComponent1 from './ClassComponent/ClassComponent1';
import ClassComponent2 from './ClassComponent/ClassComponent2';
import ClassComponent3 from './ClassComponent/ClassComponent3';
import ClassComponent4 from './ClassComponent/ClassComponent4';

function App() {
  return (
    <>
      <ClassComponent1/>
      <div style={{display:"flex",gap:"10px"}}>
        <ClassComponent2/>
        <ClassComponent3/>
      </div>
      <ClassComponent4/>
    </>
  );
}

export default App;