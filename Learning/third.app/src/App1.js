import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/screens/home";
import Nav from "./components/include/nav";
// import style from "Learning\third.appsrcApp.css";
import "./App.css";
import About from "./components/screens/about";
import Contact from "./components/screens/contact";

class App extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            this is the first app1.js <hr />
          </li>
        </ul>
        {/* REACCT ROUTER WHAT THE HECK */}
        {/* INTRODUCTION AND PAGE SETUP */}
        {/*  NAMMAL EPPOAHUM ONNIL PAGE VEKKILLE ATHINE VEARA RITHIYIL MANAGE CHEYYUM */}
        {/* for the packages we use  */}
        {/* for routing --- react router dom == npm i react-router-dom */}
        {/* and must import browserrouter as router, routes, route */}
        {/* rout is like a path */}

        <Router>
          <Nav />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
