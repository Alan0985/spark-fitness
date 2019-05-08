import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ExploreNavbar from "./ExploreNavbar";
import About from "./about/About";
import Contact from "./contact/Contact";
import Membership from "./membership/Membership";
import PT from "./pt/PT";

import "./Explore.css";

class Explore extends Component {
  render() {
    return (
      <Router>
        <div id="explore">
          <ExploreNavbar />
          <Route exact path="/explore" component={About} />
          <Route exact path="/explore/contact" component={Contact} />
          <Route exact path="/explore/membership" component={Membership} />
          <Route exact path="/explore/pt" component={PT} />
        </div>
      </Router>
    );
  }
}

export default Explore;
