import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {

  return (
    <nav>
      <h1>
        <a href="/">Title</a>
      </h1>
      <ul className="nav-list">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/board">Board</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
