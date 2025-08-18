// USE STATE INTRODUCTION
// IMPORTANT
// use state using now
import React from "react";
import Usefunction from "./Components/usestate";
import Counter from "./Components/counter";
import Usestate2 from "./Components/usestate2";
import Usestate3 from "./Components/usestate3";

class App20 extends React.Component {
  render() {
    return (
      <>
        <Usefunction />
        <Usestate2 />
        <Usestate3 />
        <ul>
          <li>
            this is the first app20.js USE STATE
            <hr />
          </li>
        </ul>
        <Counter />
      </>
    );
  }
}

export default App20;

// With using command rfc it is easy to built up a react base
// for that just type rfc and install es7 React/reducs populat plugin
