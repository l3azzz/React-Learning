// PASSING DATA THROUGH PROPS
// how to pass a data to a component
// props = property

import React from "react";
import Blah from "./Components/app6blah.js";
class App extends React.Component {
  render() {
    return (
      <>
        <Blah
          title="Custom atttri "
          description="hello this is description app6.js"
        />

        {/* title="bazzz" is custom attribute that is accepted b the component in app5blah.js at that attribute can be used to changge the text or more */}
        {/* we call that by using this.props.customattribute  in a curly bracket*/}
        <ul>
          <li>
            this is the first app6.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
