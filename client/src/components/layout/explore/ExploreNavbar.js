import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ExploreNavbar extends Component {
  render() {
    return (
      <div className="fixedHeader">
        <div className="exploreHeader">
          <i className="fab fa-gripfire" />
          <p>Spark Fitness</p>
        </div>

        <nav className="exploreTab">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="" to="/explore">
                <p>About</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/explore/membership">
                <p>Membership</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/explore/training">
                <p>Training</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="" to="/explore/contact">
                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default ExploreNavbar;
