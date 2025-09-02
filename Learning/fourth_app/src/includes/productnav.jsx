import React from "react";
import { NavLink, Outlet } from "react-router";
import All from "../screens/products/all";
import Fashion from "../screens/products/fashion";
import Electronics from "../screens/products/electronics";

export default function ProductNav() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/Products/All"}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/Products/Fashion"}
          >
            Fashion
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to={"/Products/Electronics"}
          >
            Electronics
          </NavLink>
        </li>
      </ul>
      <Outlet />
      {/* inna page active aavumboal style maaranamenil anganey ullathinu  */}
      {/* nammal navlink upayogikkum */}
    </>
  );
}
