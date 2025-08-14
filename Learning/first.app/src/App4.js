// REACT COMPONENTS
// what is reat components

/*
React Components

• Components are independent and reusable bits of code
• They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.
• Components come in two types
  ○ Class components
  ○ Function components
*/

/*
----------create a class component
class HelloWorld extends React.Component {
  render() {
    return <h2>Hello world</h2>;
  }
}
--------holding data in component
function HelloWorld() {
  return <h2>Hello World</h2>;
}
*/

import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app4.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
