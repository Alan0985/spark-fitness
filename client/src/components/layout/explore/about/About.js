import React, { Component } from "react";

import Spinner from "../../../common/Spinner";

import "./About.css";

const avatar_jason = "https://www.sweetasnz.ml/avatar/avatar_jason.jpg";
const avatar_mary = "https://www.sweetasnz.ml/avatar/avatar_mary.jpg";
const avatar_lizzy = "https://www.sweetasnz.ml/avatar/avatar_lizzy.jpg";
const avatar_jack = "https://www.sweetasnz.ml/avatar/avatar_jack.jpg";

class About extends Component {
  render() {
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

          <div className="teamMembers">
            <div className="row">
              <div className="teamMember col col-lg-6 col-xs-12">
                <img src={avatar_jason} alt="avatar_jason" />
                <h2>Jason</h2>
                <p>Founder and Master Trainer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  totam porro quae, nisi ducimus officiis nemo quam laudantium
                  non vero consequatur illum soluta odit quasi adipisci in sit
                  tempore eaque.
                </p>
              </div>

              <div className="teamMember col col-lg-6 col-xs-12">
                <img src={avatar_mary} alt="avatar_mary" />
                <h2>Mary</h2>
                <p>Trainer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  totam porro quae, nisi ducimus officiis nemo quam laudantium
                  non vero consequatur illum soluta odit quasi adipisci in sit
                  tempore eaque.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="teamMember col col-lg-6 col-xs-12">
                <img src={avatar_lizzy} alt="avatar_lizzy" />
                <h2>Lizzy</h2>
                <p>Trainer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  totam porro quae, nisi ducimus officiis nemo quam laudantium
                  non vero consequatur illum soluta odit quasi adipisci in sit
                  tempore eaque.
                </p>
              </div>

              <div className="teamMember col col-lg-6 col-xs-12">
                <img src={avatar_jack} alt="avatar_jack" />
                <h2>Jack</h2>
                <p>Trainer</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  totam porro quae, nisi ducimus officiis nemo quam laudantium
                  non vero consequatur illum soluta odit quasi adipisci in sit
                  tempore eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
