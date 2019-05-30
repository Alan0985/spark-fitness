import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import request from "superagent";

import {
  getUserInfo,
  updateUserInfo,
  signOut
} from "../../../actions/authActions";

import "./Me.css";

class Me extends Component {
  constructor(props) {
    super(props);
    const { user } = props.auth;
    this.state = {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      cover: user.cover,
      weight: user.weight,
      sfid: user.sfid,
      errors: {}
    };
  }

  //If signed out, redirect to /signIn
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }
    this.props.getUserInfo();
  }

  onChangeCover(e) {
    const file = Array.from(e.target.files);

    if (file.size > 2097152) {
      alert(`${file.name} is too large. Please upload images smaller than 2M`);
    } else {
      let upload = request
        .post("https://api.cloudinary.com/v1_1/dgmvfyzua/image/upload")
        .field("upload_preset", "xeest4yh")
        .field("file", file);

      upload.end((err, response) => {
        if (err) {
          console.log(err);
        }
        this.setState({
          cover: response.body.secure_url
        });
        const newInfo = {
          name: this.state.name,
          email: this.state.email,
          avatar: this.state.avatar,
          cover: this.state.cover,
          weight: this.state.weight,
          sfid: this.state.sfid
        };
        this.props.updateUserInfo(newInfo);
      });
    }
  }

  onSignOut = () => {
    this.props.signOut();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <section id="myProfile">
        <div className="profileHeader">
          <input
            type="file"
            name="cover"
            accept="image/*"
            onChange={this.onChangeCover.bind(this)}
          />
          <img className="cover" src={user.cover} alt="cover" />

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
  updateUserInfo: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserInfo, updateUserInfo, signOut }
)(Me);
