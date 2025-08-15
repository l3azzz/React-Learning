// DISPLAYING LIST IN REACT AND JSX

import React from "react";
import Student1 from "./Components/student1";
class App extends React.Component {
  render() {
    return (
      <>
        <Student1 />
        <ul>
          <li>
            this is the first app8.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
