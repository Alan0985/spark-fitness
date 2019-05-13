import React, { Component } from "react";
import { YesFranchiseItem, NoFranchiseItem } from "./FranchiseItem";

class Option extends Component {
  constructor() {
    super();
    this.state = {
      showFranchise: false
    };
  }

  toggleFranchise() {
    this.setState({
      showFranchise: !this.state.showFranchise
    });
  }

  render() {
    const { option } = this.props;
    let yesFranchiseList;
    let noFranchiseList;

    if (this.state.showFranchise) {
      yesFranchiseList = option.yesFranchise.map((franchiseItem, i) => (
        <YesFranchiseItem
          key={option.yesFranchise[i]}
          franchiseValue={franchiseItem}
        />
      ));
      noFranchiseList = option.noFranchise.map((franchiseItem, i) => (
        <NoFranchiseItem
          key={option.noFranchise[i]}
          franchiseValue={franchiseItem}
        />
      ));
    } else {
      yesFranchiseList = null;
      noFranchiseList = null;
    }

    return (
      <div id={`option${option.type}`} className="option">
        <div className="optionHeader">
          <div className="optionTitle">
            <h1>{option.type}</h1>
            <h5>{option.summary}</h5>
          </div>
          <div className="optionDetail">
            <a href="/explore/contact">Join Now</a>
            <div
              onClick={this.toggleFranchise.bind(this)}
              className="yourFranchise"
            >
              <i className="fas fa-angle-double-down" />
              <p>Your Franchise</p>
              <i className="fas fa-angle-double-down" />
            </div>
          </div>
        </div>

        <div className="franchise">
          <div className="franchiseList">
            {yesFranchiseList}
            {noFranchiseList}
          </div>
        </div>
      </div>
    );
  }
}

export default Option;
