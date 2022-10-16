import React, { Component } from "react";

export default class GreetClass extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name} is a {this.props.work}
        </h1>
      </div>
    );
  }
}
