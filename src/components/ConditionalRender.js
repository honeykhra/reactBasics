import React, { Component } from "react";

export default class ConditionalRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }

  render() {
    // Short circuit operator
    // return this.state.isLoggedin && <h3>Conditional render username Honey</h3>;

    // Ternary operator
    return this.state.isLoggedin ? (
      <h3>Conditional render username Honey</h3>
    ) : (
      <h3>Conditional render Guest</h3>
    );

    // let text;
    // if (this.state.isLoggedin) {
    //   text = <h3>Conditional render username Honey</h3>;
    // } else {
    //   text = <h3>Conditional render Guest</h3>;
    // }
    // return <div>{text}</div>;

    // if (this.state.isLoggedin) {
    //   return <h3>Conditional render username Honey</h3>;
    // } else {
    //   return <h3>Conditional render Guest</h3>;
    // }
  }
}
