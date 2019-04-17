import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./EditProfile.css";
import avatarPath from "../../img/avatar_500.jpg";

class EditProfile extends Component {
  render() {
    return (
      <section id="editProfile">
        <form action="">
          <div className="editProfileHeader">
            <Link to="/users/me">
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
            <p>Spark Fitness ID:</p>
            <p>Julie8888</p>
          </div>

          <div className="avatar">
            <p>Avatar</p>
            <img src={avatarPath} alt="avatar" />
          </div>

          <div className="name">
            <p>Name</p>
            <input type="text" name="name" value="Julie" />
          </div>

          <div className="email">
            <p>Email</p>
            <input type="email" name="email" value="julie@gmail.com" />
          </div>

          <div className="weight">
            <p>Weight(kg)</p>
            <input
              type="text"
              name="weight"
              value=""
              placeholder="Please enter weight"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default EditProfile;
