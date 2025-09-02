import React from "react";
import { Link } from "react-router-dom";

export default function ProductNav() {
  return (
    <div className="body">
      <div className="top"></div>
      <ul>
        <li>
          <Link to="./components/thirdapp/all">All</Link>
        </li>
        <li>
          <Link to="./components/thirdapp/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="./components/thirdapp/electronics">Electronics</Link>
        </li>
      </ul>

      <div />
      <div />
    </div>
  );
}
