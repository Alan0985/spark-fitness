import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getExploreData } from "../../../../actions/exploreActions";

import Option from "./Option";
import Spinner from "../../../common/Spinner";

import "./Membership.css";

class Membership extends Component {
  componentDidMount() {
    this.props.getExploreData();
  }

  render() {
    const { membership } = this.props.explore.explore;
    const { load } = this.props.explore;

    let options;
    if (typeof membership === "undefined" || load) {
      options = <Spinner />;
    } else {
      options = membership.map(option => (
        <Option key={option.type} option={option} />
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
  getExploreData: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  explore: state.explore
});

export default connect(
  mapStateToProps,
  { getExploreData }
)(Membership);
