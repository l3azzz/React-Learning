// Styling using inline method and using css file
// how to style a components

import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li class="app11">
            {/* style as class then attribute method also we have to put it in as objects using {} and a another bracket for {} key value should be in "*/}
            <h3 style={{ color: "violet", fontSize: "10px" }}>
              {/* this style applying using inline is very bad don't do it  */}
              hi there his is app11 .js
            </h3>
            this is the first app11.js <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;
