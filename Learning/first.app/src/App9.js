// passing key prop in acomponent
// react normal method --- we use repetative component ine oru seperate component aakkum react normal method
// by using components calcy.js screen.js ike that
import React from "react";

// import Contentofstudent from "./Components/contentofstudent";
import Filledstudent from "./Components/filledcontentofstudents";
// import Filled_student from "./Components/filledcontentofstudents";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <hr />
          </li>
          <Filledstudent />
        </ul>
      </>
    );
  }
}

export default App;
