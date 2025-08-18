import React, { useState } from "react";

function Usestate3() {
  const [name, setName] = useState("Sobir N");
  const [age, setAge] = useState(15);
  return (
    <>
      <h1>
        {name}, {age}
      </h1>
      <button onClick={() => setName("Joe")}>Update Name</button>
      <button onClick={() => setAge((prevState) => prevState + 1)}>
        Increment Age
      </button>
    </>
  );
}

export default Usestate3;
