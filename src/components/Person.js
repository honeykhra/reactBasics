import React from "react";

export default function Person({ person }) {
  const { name, age, skill } = person;
  return (
    <div>
      <h2>
        I am {name}.My age is {age}.I am a {skill}
      </h2>
    </div>
  );
}
