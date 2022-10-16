import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "EventBind not initialized",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({ message: "EventBind 1,2" });
  }

  clickHandler1 = () => {
    this.setState({ message: "EventBind 3" });
  };

  render() {
    return (
      <div>
        <div>
          <h2>{this.state.message}</h2>
          <button onClick={this.clickHandler.bind(this)}>
            Event handler 1
          </button>
          <button onClick={() => this.clickHandler()}>Event handler 2</button>
          <button onClick={() => this.clickHandler1()}>Event handler 3</button>
        </div>
      </div>
    );
  }
}
