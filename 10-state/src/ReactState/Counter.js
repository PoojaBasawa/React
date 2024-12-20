import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0, 
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  reset = () => {
    this.setState({ 
      count: 0 
    });
  };

  render() {
    return (
      <>
      <center>
        <h1>Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        </center>
      </>
    );
  }
}

export default Counter;