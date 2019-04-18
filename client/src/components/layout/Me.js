import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";

import "./Me.css";
import avatarPath from "../../img/avatar_500.jpg";

class Me extends Component {
  onSignOut = () => {
    this.props.signOut();
  };

  render() {
    // const { isAuthenticated, user } = this.props.auth;

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
          <div onClick={this.onSignOut.bind(this)} className="signOut">
            <p>Sign Out</p>
          </div>
        </div>
      </section>
    );
  }
}

Me.propTypes = {
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signOut }
)(Me);
