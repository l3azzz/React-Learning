// INSERTING MULTIPLE JSX ELEMENT

// we can add multiple element by adding ul li abah blah ...
// anyways we can't add two h1 tags like that why?
/* return (
      <h1>Hello,<h1/>
      <h1>HI<h1/>
    ); (err failed to compile) !adjacent jsx elm must be wrapped in enclosing tag


to fix it
we need to add a div then there can be infinity childs



    */

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div class="Main">
        <ul>
          <li>
            this is the first app2.js <hr />
          </li>
          <ul>
            <li>Orange</li>
            <li>Mango</li>
            <li>Apple</li>
          </ul>
          <hr />
        </ul>

        <h1>Hello,</h1>
        <h1>what chu doing</h1>
      </div>
    );
  }
} // if multipelllines of return code then () bracket shoudl be used

export default App;

/* 

if we don't want to use div as main parent then infinity childs
we can use <React.Fragment> </React.Fragment> in simple type <> </>

import React, { Component } from "react";

class App extends Component {
    counter = 10;
    render() {
        return (
            <> // instead of <react.fragment>
                <h1>Hello World</h1>
                <h2>Hello World</h2>
            </>
        );
    }
}

export default App;








*/
