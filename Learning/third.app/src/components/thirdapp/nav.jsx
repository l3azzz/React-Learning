import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
// import ThirdHome from "./home";
// import ThirdAbout from "./about";
// import ThirdProducts from "./products";
// import ThirdContact from "./contact";
export default function ThirdNav() {
  return (
    <>
      <div className="left">
        <h1>LOGO</h1>
      </div>
      <div className="right">
        <ul>
          {/* <Router>
            <Routes>
              <Route path="/home" Component={ThirdHome}>
                <li> Home</li>
              </Route>
              <Route path="/about" Component={ThirdAbout}>
              <li> Home</li>
              </Route>
              <Route path="/products" Component={ThirdProducts}>
                <li> Home</li>
              </Route>
              <Route path="/contact" Component={ThirdContact}>
                <li> Home</li>
              </Route>
            </Routes>
          </Router>   */}
          <li>
            <Link to="./components/thirdapp/home">Home</Link>
          </li>
          <li>
            <Link to="./components/thirdapp/about">About</Link>
          </li>
          <li>
            <Link to="./components/thirdapp/contact">Contact</Link>
          </li>
          <li>
            <Link to="./components/thirdapp/products">Products</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
