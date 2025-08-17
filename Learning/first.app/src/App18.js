// CREATING HTML STRUCTURE
// FOR TO DO APP
import React from "react";
import ToDo from "./Components/ToDo";
class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
        <ul>
          <li>
            this is the first app18.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
