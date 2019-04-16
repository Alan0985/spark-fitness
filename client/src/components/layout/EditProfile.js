import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditProfile.css";
import avatarPath from "../../img/avatar_500.jpg";

class EditProfile extends Component {
  render() {
    return (
      <section id="editProfile">
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

        <div className="avatar">
          <p>Avatar</p>
          <img src={avatarPath} alt="avatar" />
        </div>

        <div className="name">
          <p>Name</p>
          <input type="text" name="name" placeholder="Julie" />
        </div>

        <div className="SFID">
          <p>Spark Fitness ID:</p>
          <p>Julie8888</p>
        </div>

        <div className="weight">
          <p>Weight(kg)</p>
          <input type="text" name="weight" placeholder="48" />
        </div>
      </section>
    );
  }
}

export default EditProfile;
