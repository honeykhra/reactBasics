import React from "react";
import Person from "./Person";

export default function NamesList() {
  const persons = [
    {
      id: 1,
      name: "Honey",
      age: 32,
      skill: "Coder",
    },
    {
      id: 2,
      name: "Divreet",
      age: 5,
      skill: "Student",
    },
    {
      id: 3,
      name: "Harsift",
      age: 2,
      skill: "Baby",
    },
    {
      id: 4,
      name: "Aman",
      age: 34,
      skill: "Teacher",
    },
  ];

  const personsList = persons.map((person) => {
    return <Person person={person} key={person.id} />;
  });
  return personsList;
}
