import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./DesktopNavbar.css";

export default class DesktopNavbar extends Component {
  render() {
    return (
      <nav id="desktopNavbar">
        <div className="brand">
          <i className="fab fa-gripfire" />
          <h1>Spark Fitness</h1>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="" to="/">
              <p>Home</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="" to="/explore">
              <p>About Us</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="" to="/explore/membership">
              <p>Membership</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="" to="/explore/training">
              <p>Training</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="" to="/explore/contact">
              <p>Contact</p>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink exact className="" to="/moments">
              <p>Moments</p>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="" to="/me">
              <p>Me</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
