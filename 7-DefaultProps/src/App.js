// #Details.js
import React from 'react'
import Details from './ReactProps/Details';

function App() {
  return (
    <>
      <Details name="virat" age="36" city="Bangalore"/>
      <Details name="Sachin" age="27" city="Mangalore"/>
      <Details age="47" city="mysore"/>
      <Details/>
      <Details name="Raj" city="Kolar"/>
    </>
  );
}

export default App;