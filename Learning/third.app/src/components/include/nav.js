// unlike fucking a tag to move pages we use link
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <section className="header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
