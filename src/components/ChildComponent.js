import React from "react";

export default function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      <div>ChildComponent</div>
      <button onClick={props.clickHandler}>Call Parent</button>
      <button onClick={() => props.clickHandler1("child")}>Call Parent2</button>
    </div>
  );
}
