import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

import { getUserInfo, updateUserInfo } from "../../../actions/authActions";

import "./EditProfile.css";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    const { user } = props.auth;
    this.state = {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      weight: user.weight,
      sfid: user.sfid,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/me/signIn");
    }

    this.props.getUserInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeAvatar(e) {
    const files = Array.from(e.target.files);
    const formData = new FormData();

    files.forEach((file, i) => {
      if (file.size > 512000) {
        alert(`${file.name} is too large.`);
      } else {
        formData.append(i, file);
      }
    });

    fetch("https://api.cloudinary.com/v1_1/dgmvfyzua/image/upload", {
      method: "POST",
      headers: new Headers(),
      mode: "cors",
      cache: "default",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(images => {
        this.setState({
          avatar: images[0].secure_url
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const newInfo = {
      name: this.state.name,
      email: this.state.email,
      avatar: this.state.avatar,
      weight: this.state.weight,
      sfid: this.state.sfid
    };

    this.props.updateUserInfo(newInfo);
  }

  render() {
    const { errors } = this.state;

    return (
      <section id="editProfile">
        <form noValidate onSubmit={this.onSubmit}>
          <div className="editProfileHeader">
            <Link to="/me">
              <div className="backToMyProfile">
                <i className="fas fa-chevron-left" />
                <p>My Profile</p>
              </div>
            </Link>

            {this.state.name.length < 2 ? (
              <input
                type="submit"
                value="Save"
                className="disabledSave"
                disabled
              />
            ) : (
              <input type="submit" value="Save" className="save" />
            )}
          </div>

          <div className="SFID">
            <p>SFID:</p>
            <input
              type="text"
              name="sfid"
              value={this.state.sfid}
              placeholder="Please bind SFID"
              onChange={this.onChange}
            />
          </div>

          <div className="avatar">
            <p>Avatar</p>

            <div className="avatarInput">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={this.onChangeAvatar.bind(this)}
              />
              <img src={this.state.avatar} alt="avatar" />
            </div>
          </div>

          <div className="name">
            <p>Name</p>
            <input
              type="text"
              className={classnames("", {
                "is-invalid": errors.name
              })}
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>

          <div className="email">
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={this.state.email}
              disabled
            />
          </div>

          <div className="weight">
            <p>Weight(kg)</p>
            <input
              type="text"
              className={classnames("", {
                "is-invalid": errors.weight
              })}
              name="weight"
              value={this.state.weight}
              onChange={this.onChange}
              placeholder="Please enter weight"
            />
          </div>

          <div className="errorText">
            {errors.weight && <p className="invalidMsg">{errors.weight}</p>}
          </div>
        </form>
      </section>
    );
  }
}
EditProfile.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUserInfo, updateUserInfo }
)(EditProfile);
