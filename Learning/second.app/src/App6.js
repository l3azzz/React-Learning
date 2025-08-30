import React from "react";

// GET REQUEST || WORKING WITH HTTP REQUEST !!!
// how to fetch API
import axios from "axios";
import Users from "./Components/users";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app6.js <hr />
          </li>
        </ul>
        <Users />
      </>
    );
  }
}

export default App;
