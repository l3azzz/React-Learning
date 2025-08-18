// React HOOKS
// INTRODUCTION
// we used class based components
// now we use functional components
// how to use it
// how to use functional component with all features as class component

// React Hooks
//  Hoooks are new addition in react 16.8 They let you use state and other React features without writing a class.
// Hook doesn't work inside Classes

import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li style={{ color: "red", fontSize: "30px", fontWeight: 600 }}>
            this is the first app19.js INTRODUCTION TO REACT HOOKS
            <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;

// Demerits of Class Components

// Confusing (both human and machines, especially at binding and this keyword)
// Lifecycle methods, logic spread over different lifecycle methods
// Compiled code size and compile time

// Noteworthy Points
// React version 16.8 or higher
// Completely opt in
// Hooks don't contain any breaking changes and the release is 100% backwards-compatible.
// Classes won't be removed from React
// Can't use Hooks inside of a class component
// Hooks don't replace your existing knowledge of React concepts
// Instead, Hooks provide a more direct API to the React concepts you already know
