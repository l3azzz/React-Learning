import React, { useState } from "react";

function Usestate2() {
  // const [name, setName] = useState("Sobir N");
  // const [age, setAge] = useState(15);
  // here you see we seperated to fix it now usees state with objects

  // converted to this

  const [student, setStudent] = useState({
    name: "Basith",
    age: 35,
  });

  return (
    <>
      <h1>
        {student.name}, {student.age}
      </h1>
      <button onClick={() => setStudent({ ...student, name: "l3azzz" })}>
        Update Name
      </button>
      {/* ({ name: "l3azzz" })} this fucks in this so we use spread operators */}
      <button onClick={() => setStudent({ ...student, age: student.age + 1 })}>
        Increment Age
      </button>
      <h1>{JSON.stringify(student)}</h1>
    </>
  );
}

export default Usestate2;
