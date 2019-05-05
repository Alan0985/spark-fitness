import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, signOut } from "./actions/authActions";
import store from "./store";

import MobileNavbar from "./components/layout/MobileNavbar";
import Landing from "./components/layout/Landing";
import Me from "./components/layout/Me";
import EditProfile from "./components/layout/EditProfile";
import MyPosts from "./components/layout/posts/MyPosts";
import NewPost from "./components/layout/posts/NewPost";
import PostDetail from "./components/layout/posts/PostDetail";
import Moments from "./components/layout/moments/Moments";
import MomentPostDetail from "./components/layout/moments/MomentPostDetail";

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

  //Check if the token expires or not
  const currentTime = Date.now() / 1000;
  if (currentTime > decoded.exp) {
    //Sign out user
    store.dispatch(signOut());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/me" component={Me} />
            <Route exact path="/me/signIn" component={SignIn} />
            <Route exact path="/me/signUp" component={SignUp} />
            <Route exact path="/me/editProfile" component={EditProfile} />
            <Route exact path="/me/newPost" component={NewPost} />
            <Route exact path="/me/myPosts" component={MyPosts} />
            <Route exact path="/me/myPosts/:id" component={PostDetail} />
            <Route exact path="/moments" component={Moments} />
            <Route exact path="/moments/:id" component={MomentPostDetail} />
            <MobileNavbar />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
