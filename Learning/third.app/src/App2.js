import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ThirdNav from "./components/thirdapp/nav";
import ThirdProducts from "./components/thirdapp/products";
import ThirdHome from "./components/thirdapp/home";
import ThirdAbout from "./components/thirdapp/about";
import ThirdContact from "./components/thirdapp/contact";
import ProductNav from "./components/thirdapp/productnav";
import { all } from "axios";
import Fashion from "./components/thirdapp/fashion";
import Electronics from "./components/thirdapp/electronics";
import All from "./components/thirdapp/all";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          {" "}
          {/* nested router */}
          <ul>
            <li>
              this is the first app2.js <hr />
            </li>
          </ul>
          <section className="main">
            <header>
              <ThirdNav />
            </header>

            <Routes>
              <>
                <Route path="/components/thirdapp/home" Component={ThirdHome} />
                <Route
                  path="/components/thirdapp/about"
                  Component={ThirdAbout}
                />
                <Route
                  path="/components/thirdapp/contact"
                  Component={ThirdContact}
                />
              </>

              {/* <Route
                path="/components/thirdapp/products"
                Component={ThirdProducts}
              /> */}
              {/* <Route path="/components/thirdapp/" */}
              {/* <>
                <div className="body">
                  <div className="top"> <Route path="/components/thirdapp/all" Component={all} />
              <Route path="/components/thirdapp/fashion" Component={Fashion} />
              <Route
                path="/components/thirdapp/electronics"
                Component={Electronics}
              /></div>
                </div>
              </> */}

              <Route path="/components/thirdapp/all" Component={All} />
              <Route path="/components/thirdapp/fashion" Component={Fashion} />
              <Route
                path="/components/thirdapp/electronics"
                Component={Electronics}
              />
            </Routes>
            <ProductNav />
          </section>
        </Router>
      </>
    );
  }
}

export default App;
