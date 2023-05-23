import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getMembershipData } from "../../../../actions/exploreActions";

import Option from "./Option";
import Spinner from "../../../common/Spinner";

import "./Membership.css";

class Membership extends Component {
  componentDidMount() {
    this.props.getMembershipData();
  }

  render() {
    const { load, membership } = this.props.explore;

    let options;
    if (typeof membership === "undefined" || load) {
      options = <Spinner />;
    } else {
      options = membership.map((option) => (
        <Option key={option.membershipOption} option={option} />
      ));
    }

    return (
      <div id="membership">
        <div className="optionBanner">
          <div className="optionBannerOverlay">
            <h1>Membership Options</h1>
            <p>Make a decision, then you are on the way</p>
          </div>
        </div>
        <div className="options">{options}</div>
      </div>
    );
  }
}

Membership.propTypes = {
  getMembershipData: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  explore: state.explore,
});

export default connect(mapStateToProps, { getMembershipData })(Membership);
