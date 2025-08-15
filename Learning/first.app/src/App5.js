// NSESTING COMPONENTS
// WE WRTIE EACH COMPONENT IN SEPERATE FILES RIGHT!
// src/**components/screens**  in this we can add a js file same as here then add classes or components
// then we can reuse them by their location
// component first name should be caps

import React from "react";
import Screen from "./Components/screen.js"; // it is been now importe dnow to use this
class App extends React.Component {
  render() {
    return (
      <Screen /> // use this to import this we can reuse this infinity times also
      //   <>

      //     {/* return <Screen />
      //     <ul>
      //       <li>{/* this is the first app5.js <hr /> */}</li>
      //     </ul> */}
      //   </>
    );
  }
}

export default App;
