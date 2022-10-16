import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.parentFunc = this.parentFunc.bind(this);
    this.parentFunc1 = this.parentFunc1.bind(this);
  }

  parentFunc() {
    alert(`Hello from ${this.state.parentName}`);
  }

  parentFunc1(child) {
    alert(`Hello to ${this.state.parentName} from ${child}`);
  }

  render() {
    return (
      <div>
        <ChildComponent
          clickHandler={this.parentFunc}
          clickHandler1={this.parentFunc1}
        />
      </div>
    );
  }
}
