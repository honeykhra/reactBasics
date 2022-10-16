import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("Callback value: " + this.state.count);
    });
  }

  //? When we need to use value of previous iteration to next
  //? we pass function as an argument instead of the object we pass generally

  increment1() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
