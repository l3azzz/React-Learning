// function App() {
//   return <h1>Hello World</h1>; // but now we can call this as html
//   // some amount of data return ed by a function is called functional components
// }
// // we call this bcuz there are class based function

import React from "react";

class App extends React.Component {
  render() {
    // The render function is responsible for rendering JSX.
    return (
      <ul>
        <li>
          this is the first app1.js <hr />
        </li>
      </ul>
    );
  }
}

export default App;
// above code is the full code of class based components

// helllo world program
// first open app.js
// app.js main parent file

// it looks like html
// but js like "class"
// athukond nammuk ozhivaakkaam

/*
import logo from "./logo.svg";
import "./App.css";




<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
    
    */
