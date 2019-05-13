import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getExploreData } from "../../../../actions/exploreActions";

import { TrainingGroup } from "./TrainingGroup";
import Spinner from "../../../common/Spinner";

import "./Training.css";

class Training extends Component {
  componentDidMount() {
    this.props.getExploreData();
  }

  render() {
    const { training } = this.props.explore.explore;
    const { loading } = this.props.explore;

    let trainingGroup;
    if (typeof training === "undefined" || loading) {
      trainingGroup = <Spinner />;
    } else {
      trainingGroup = training.map(training => (
        <TrainingGroup key={training.category} training={training} />
      ));
    }

    return <div id="training">{trainingGroup}</div>;
  }
}

Training.propTypes = {
  getExploreData: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  explore: state.explore
});

export default connect(
  mapStateToProps,
  { getExploreData }
)(Training);
