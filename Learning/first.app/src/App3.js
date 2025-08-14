// IMPORTANCE OF CLOSING IN JSX

// if we accidentely not closed a tag
// it completely crashes just f**ks up
// so remember to close !

import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app3.js <hr />
          </li>
        </ul>
        <h3>Hello world,</h3>
      </>
    );
  }
}

export default App;
