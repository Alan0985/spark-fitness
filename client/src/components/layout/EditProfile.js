import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

import "./EditProfile.css";
import avatarPath from "../../img/avatar_500.jpg";

class EditProfile extends Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/signIn");
    }
    // this.props.getCurrentProfile();
  }

  render() {
    const { profile } = this.props.profile;
    const { user } = this.props.auth;

    return (
      <section id="editProfile">
        <form action="">
          <div className="editProfileHeader">
            <Link to="/me">
              <div className="backToMyProfile">
                <i className="fas fa-chevron-left" />
                <p>My Profile</p>
              </div>
            </Link>

            <a href="#">
              <div className="save">
                <p>Save</p>
              </div>
            </a>
          </div>

          <div className="SFID">
            <p>SFID:</p>
            <input
              type="text"
              name="sfid"
              value={user.sfid}
              placeholder="Please bind SFID"
            />
          </div>

          <div className="avatar">
            <p>Avatar</p>
            <img src={avatarPath} alt="avatar" />
          </div>

          <div className="name">
            <p>Name</p>
            <input type="text" name="name" value={user.name} />
          </div>

          <div className="email">
            <p>Email</p>
            <input type="email" name="email" value={user.email} />
          </div>

          <div className="weight">
            <p>Weight(kg)</p>
            <input
              type="text"
              name="weight"
              value={profile.weight}
              placeholder="Please enter weight"
            />
          </div>
        </form>
      </section>
    );
  }
}
EditProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(EditProfile);
