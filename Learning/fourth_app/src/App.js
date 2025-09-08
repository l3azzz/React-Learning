import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";
import Not_Founded from "./screens/not_founded";
import NavBar from "./includes/nav";
import ProductNav from "./includes/productnav";
import All from "./screens/products/all";
import Fashion from "./screens/products/fashion";
import Electronics from "./screens/products/electronics";
import Products from "./screens/products";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* nested routing below */}
        <Route path="/products" element={<ProductNav />}>
          {/* INDEX ROUTE BELOW */}
          <Route index element={Products} />
          <Route path="all" element={All} />
          <Route path="fashion" element={Fashion} />
          <Route path="electronics" element={Electronics} />
        </Route>
        <Route path="*" element={<Not_Founded />} />
      </Routes>
    </Router>
  );
}

export default App;

// wha tis react helmet
// when sweitching pages the header title is same a react app to change based on pages
// we use react helemet
// to install that

// use params
//  /student:studentid the thing after : is a param that welcomes any params
//  to use we use import useParams

// USE SERACH PAARAMS
