import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

import { getUserInfo } from "../../actions/authActions";

import "./Me.css";

class Me extends Component {
  //If signed out, redirect to /signIn
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }

    this.props.getUserInfo();
  }

  onSignOut = () => {
    this.props.signOut();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <section id="myProfile">
        <div className="profileHeader">
          <div className="avatarName">
            <div className="profileAvatar">
              <img src={user.avatar} alt="avatar" />
            </div>
            <div className="nameID">
              <p className="name">{user.name}</p>
              <p className="SFID">SFID: {user.sfid}</p>
            </div>
          </div>
        </div>

        <div className="profileMain">
          <Link to="/me/editProfile">
            <div className="editProfile">
              <i className="fas fa-user-edit" />
              <p>Edit Profile</p>
              <i className="fas fa-chevron-right" />
            </div>
          </Link>
          <a href="/me/myPosts">
            <div className="myPosts">
              <i className="fas fa-images" />
              <p>My Posts</p>
              <i className="fas fa-chevron-right" />
            </div>
          </a>
          <div onClick={this.onSignOut.bind(this)} className="signOut">
            <p>Sign Out</p>
          </div>
        </div>
      </section>
    );
  }
}

Me.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserInfo, signOut }
)(Me);
