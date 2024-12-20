import React from 'react';

function FunctionalComponent() {
  return (
    <>
      <h1>This is Functional Component</h1>
      <Greet/>
    </>
  );
}

function Greet() {
  return (
    <>
      <h2>Welcome to React JS class</h2>
    </>
  );
}

export default FunctionalComponent;