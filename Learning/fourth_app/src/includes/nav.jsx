import React from "react";
import { NavLink } from "react-router";
import Home from "../screens/home";
import About from "../screens/about";
import Products from "../screens/products";
import Contact from "../screens/contact";

export default function NavBar() {
  return (
    <>
      <header>
        <h1>LOGO</h1>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Products"}>Products</NavLink>
          </li>

          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
