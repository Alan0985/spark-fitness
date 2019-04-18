import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

class MobileNavbar extends Component {
  render() {
    return (
      <nav id="mobileNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="active" to="/">
              <i className="fab fa-gripfire" />
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/explore">
              <i className="fas fa-compass" />
              <p>Explore</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/moments">
              <i className="far fa-smile-wink" />
              <p>Moments</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/signIn">
              <i className="fas fa-user" />
              <p>Me</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MobileNavbar;
