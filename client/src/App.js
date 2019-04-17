import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import store from "./store";

import MobileNavbar from "./components/layout/MobileNavbar";
import Landing from "./components/layout/Landing";
import Me from "./components/layout/Me";
import EditProfile from "./components/layout/EditProfile";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

import "./App.css";

//Check Current User Token
if (localStorage.jwtToken) {
  //Set auth header
  setAuthToken(localStorage.jwtToken);

  //Decode Token
  const decoded = jwt_decode(localStorage.jwtToken);

  //Set Current User
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/users/me" component={Me} />
            <Route
              exact
              path="/profile/me/editProfile"
              component={EditProfile}
            />
            <MobileNavbar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
