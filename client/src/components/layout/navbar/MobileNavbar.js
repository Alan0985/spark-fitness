import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavbar.css";

class MobileNavbar extends Component {
  render() {
    return (
      <nav id="mobileNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="" to="/">
              <i className="fab fa-gripfire" />
              <p>Home</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="" to="/explore">
              <i className="fas fa-compass" />
              <p>Explore</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="" to="/moments">
              <i className="far fa-smile-wink" />
              <p>Moments</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="" to="/me">
              <i className="fas fa-user" />
              <p>Me</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MobileNavbar;
