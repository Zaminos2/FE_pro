import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incCounter}>+</button>
        <p>{this.state.counter}</p>
        <button onClick={this.decCounter}>-</button>
      </div>
    );
  }
}

export default Counter;