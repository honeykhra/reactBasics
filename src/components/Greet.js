import React from "react";

const Greet = (props) => {
  console.log(props);

  return (
    <div>
      <h1>
        Welcome {props.name} is a {props.work}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
