import React, { Component } from "react";

class MobileNavbar extends Component {
  render() {
    return (
      <nav id="mobileNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="active" href="">
              <i className="fab fa-gripfire" />
              <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="#">
              <i className="fas fa-compass" />
              <p>Explore</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="#">
              <i className="far fa-smile-wink" />
              <p>Moments</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="" href="https://www.google.com/">
              <i className="fas fa-user" />
              <p>Me</p>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default MobileNavbar;
