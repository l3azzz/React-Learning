// EFFEC HOOK INTRO

import React from "react";
import "./index.css";
import Counting from "./Components/counting";

class App extends React.Component {
  render() {
    return (
      <>
        <Counting />
        <ul>
          <li>
            this is the first app2.js EFFECT HOOK INTRO
            {/*  */}
            <div className="parent">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">APP2.JS</span>
                  <p className="card-content">Effect hook intro in app2.js</p>
                  <span className="see-more">See More</span>
                </div>
                <div className="date-box">
                  <span className="month">APP</span>
                  <span className="date">JS</span>
                </div>
              </div>
            </div>
            {/*  */}
            <hr />
          </li>
        </ul>
      </>
    );
  }
}

export default App;

// useEffect

// useEffect helps to implement lifecycle methods functionalities to functional components
//
// It's a closest replacement of componentDidMount, componentDidUpdate,
// componentWillUnmount

// life cycle method = if property changes mattam scrrenil varanam
// component did mount works oncuechange
// component did update when updates
// component will unmount when unmounts

// video 2
// conditionally run effects
