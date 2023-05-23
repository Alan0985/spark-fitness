import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTrainingData } from "../../../../actions/exploreActions";

import { TrainingGroup } from "./TrainingGroup";
import Spinner from "../../../common/Spinner";

import "./Training.css";

class Training extends Component {
  componentDidMount() {
    this.props.getTrainingData();
  }

  render() {
    const { load, training } = this.props.explore;

    let trainingGroup;
    if (typeof training === "undefined" || load) {
      trainingGroup = <Spinner />;
    } else {
      trainingGroup = training.map((training) => (
        <TrainingGroup key={training.category} training={training} />
      ));
    }

    return (
      <div id="training">
        <div className="training">
          <div className="trainingOverlay">
            <h1>Our Training</h1>
            <p>
              No matter what your level of fitness and ability is, we’ve got a
              class to suit you.
            </p>
          </div>
        </div>
        {trainingGroup}
      </div>
    );
  }
}

Training.propTypes = {
  getTrainingData: PropTypes.func.isRequired,
  explore: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  explore: state.explore,
});

export default connect(mapStateToProps, { getTrainingData })(Training);
