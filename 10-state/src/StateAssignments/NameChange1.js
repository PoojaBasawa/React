// # USE APP1
import React from 'react';

// #In React, you can only have one state object per component(below one is object)
class NameChange1 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Virat",
      age: "22",
      city: "Mumbai"
    };
  }

  changeName = () => {
    this.setState({
      name: "Dhoni"
    });
  }

  changeAge = () => {
    this.setState({
      age: "99"
    });
  }

  changeCity = () => {
    this.setState({
      city: "Bangalore"
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Click Here to Change Name</button>
        <br />
        <h2>{this.state.age}</h2>
        <button onClick={this.changeAge}>Click Here to Change Age</button>
        <h3>{this.state.city}</h3>
        <button onClick={this.changeCity}>Click Here to Change City</button>
      </>
    );
  }
}

export default NameChange1;