import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getExploreData } from "../../../../actions/exploreActions";

import Spinner from "../../../common/Spinner";

import "./About.css";

class About extends Component {
  componentDidMount() {
    this.props.getExploreData();
  }

  render() {
    console.log("this.props.explore", this.props.explore);
    const { team } = this.props.explore.explore;
    const { load } = this.props.explore;

    let teamMembers;
    if (typeof team === "undefined" || load) {
      teamMembers = <Spinner />;
    } else {
      teamMembers = team.map((teamMember) => (
        <div className="teamMember" key={teamMember.id}>
          <img src={teamMember.avatar} alt={teamMember.name} />
          <h2>{teamMember.name}</h2>
          <p>{teamMember.title}</p>
          <p>{teamMember.description}</p>
        </div>
      ));
    }

    return (
      <div id="about">
        <div className="mission">
          <div className="missionOverlay">
            <h1>Our Mission</h1>
            <p>Choosing health can be a life altering experience</p>
          </div>
        </div>

        <div className="aboutUs">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            magni ea quis ex enim perspiciatis veniam quo facilis earum
            assumenda. Praesentium ut explicabo, facilis veniam aperiam rem et
            quam. Error, assumenda rem veniam voluptatum autem possimus amet
            blanditiis ad esse eaque rerum alias soluta dolorem iste obcaecati
            in cumque quidem reprehenderit? Assumenda eius atque soluta
            asperiores cumque quod quasi, neque explicabo totam aliquid quisquam
            laboriosam vero eaque amet laborum voluptatem vitae expedita. Odit
            odio blanditiis neque doloribus sapiente doloremque ab!
          </p>
        </div>

        <div className="team">
          <div className="teamHeader">
            <h1>Our Team</h1>
          </div>

          <div className="teamMembers">{teamMembers}</div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  getExploreData: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  explore: state.explore,
});

export default connect(mapStateToProps, { getExploreData })(About);
