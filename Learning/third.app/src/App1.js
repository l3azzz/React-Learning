import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/screens/home";
import Nav from "./components/include/nav";
// import style from "Learning\third.appsrcApp.css";
import "./App.css";
import About from "./components/screens/about";
import Contact from "./components/screens/contact";
import Notfound from "./components/screens/notfound";
import One from "./components/screens/one";
import Two from "./components/screens/two";
// import Page404 from "./components/screens/notfound.js";s

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

        {/* IPPAM ILLAATHA ORU ROUTE FOR EG HTTPS://BASITH.COM /AS;LDFJASDFJ ENNU PARAYUNANTHIL VANNAL */}
        {/* ENTHU CHEYYUMENNALLEAYH ATHINU PAGE 404 AAKKAAM ALLEAH */}

        <Router>
          <Nav />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            {/* 404 */}
            <Route path="*" Component={Notfound} />
            {/* (*) means eah pathukalallaatha vallah pathum undekil */}

            {/* URL REDIRECTION */}
            {/* ithin navigate ennu paryana saanam import cheyyanam */}
            <Route
              path="/one"
              element={<Navigate to="/two" replace={true} />}
            />
            {/* mealil vecha poaley vechu kazhinja pinneayh ethra back adichaalum same page il irikkum so vwe use repalce {true} */}
            {/* ippo one il click cheythal two il aanu pooveandath so above nokk */}
            <Route path="/two" Component={Two} />

            {/* NESTED ROUTER */}
            {/* NTOHING ABOVE */}
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
