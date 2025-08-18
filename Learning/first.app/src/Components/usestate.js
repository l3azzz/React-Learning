import React, { useState } from "react"; // Import React and the useState hook

function Usefunction() {
  // Create a state variable 'name' with default value "Basith"
  // 'setName' lets you change the value of 'name'
  const [name, setName] = useState("Basith");

  // Create a state variable 'age' with default value 35
  // 'setAge' lets you change the value of 'age'
  const [age, setAge] = useState(35);
  // /now we look how to update it's thing by using set function
  // If you call setName or setAge, this component will automatically update (re-render)
  // UPDATE STATE USING HOOK
  return (
    <div>
      {/* Shows the current values of name and age */}
      Usefunction name = <br />
      {name}
      <br /> age = {age} <br />
      <button
        onClick={() => setName(name === "Basith" ? "l3azz.th" : "Basith")}
      >
        Change Name
      </button>
      <button onClick={() => setAge(age + 1)}>Upgrade AGe</button>
      {/* <button onClick={() => setAge(age - 1)}>Degrade AGe</button> this is a logn there is another way */}
    </div>
  );
  //   by using this syntac bcum very easy
}

export default Usefunction; // Allows other files to use this component

//
//
//----------------------- EXPLANATION ----------------------//
// 1. useState is a React "hook" used inside function components.
// 2. useState returns an array with:
//      - The state value
//      - A function to change that value (the setter)
// 3. Syntax example: const [stateValue, setStateValue] = useState(initialValue);
// 4. Every time you call the setter (like setName or setAge),
//      React updates the state and the component displays the new value.
// 5. You can use useState multiple times in a single component for different state variables.
// 6. Example: To change the name, call setName("newname");
//    To change the age, call setAge(newAge);
// 7. Any state variable (name, age, etc.) will always use a unique pair with its own set function.
//
//---------------------------------------------------------//

// Rules of Hooks

// "Only Call Hooks at the Top Level"
// Don't call Hooks inside loops, conditions, or nested functions
// "Only Call Hooks from React Functions"
// Call them from within React functional components and not just any regular JavaScript function

//  Updating state using Prevstate
