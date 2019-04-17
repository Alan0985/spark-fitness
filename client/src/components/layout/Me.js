import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

import "./Me.css";
import avatarPath from "../../img/avatar_500.jpg";

// const User = require("../../");

class Me extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "",
  //     errors: {}
  //   };
  // }

  // componentDidMount() {
  //   axios
  //     .get("/api/users/me")
  //     .then(res => this.setState({ name: res.name }))
  //     .catch(err => this.setState({ errors: err.response.data }));
  // }

  render() {
    return (
      <section id="myProfile">
        <div className="profileHeader">
          <div className="avatarName">
            <div className="profileAvatar">
              <img src={avatarPath} alt="avatar" />
            </div>
            <div className="nameID">
              <p className="name">Julie</p>
              <p className="SFID">SF ID: Julie8888</p>
            </div>
          </div>
        </div>

        <div className="profileMain">
          <Link to="/profile/me/editProfile">
            <div className="editProfile">
              <i className="fas fa-user-edit" />
              <p>Edit Profile</p>
              <i className="fas fa-chevron-right" />
            </div>
          </Link>
          <a href="#">
            <div className="myPost">
              <i className="fas fa-images" />
              <p>My Post</p>
              <i className="fas fa-chevron-right" />
            </div>
          </a>
          <a href="#">
            <div className="signOut">
              <p>Sign Out</p>
            </div>
          </a>
        </div>
      </section>
    );
  }
}

export default Me;
