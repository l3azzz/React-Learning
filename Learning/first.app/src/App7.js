// NORMAL PROPERTIES AND METHODS INSIDE REACT COMPONENT
// FUNCTION INSIDE COMPONENT

import React from "react";
import Calc from "./Components/calcy.js";
class App extends React.Component {
  render() {
    return (
      <>
        <Calc a={90} b={50} />
        {/* wehn insreting num.. in jsx we should put { for number only} */}
        <ul>
          <li>
            this is the first app7.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
