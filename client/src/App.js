import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MobileNavbar from "./components/layout/MobileNavbar";
import Landing from "./components/layout/Landing";
import Me from "./components/layout/Me";
import EditProfile from "./components/layout/EditProfile";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/users/me" component={Me} />
          <Route exact path="/profile/me/editProfile" component={EditProfile} />
          <MobileNavbar />
        </div>
      </Router>
    );
  }
}

export default App;
