import React, { Component } from "react";

import FranchiseItem from "./FranchiseItem";

class Option extends Component {
  render() {
    const { option } = this.props;

    let franchiseList;
    franchiseList = option.franchise.map((franchiseItem, i) => (
      <FranchiseItem key={option.franchise[i]} franchiseValue={franchiseItem} />
    ));

    return (
      <div id={`option${option.type}`} className="option">
        <div className="optionHeader">
          <div className="optionTitle">
            <h1>{option.type}</h1>
            <h5>{option.summary}</h5>
          </div>
          <div className="optionDetail">
            <a href="/explore/contact">Join Now</a>
          </div>
        </div>
        <div className="franchise">
          <div className="franchiseHeader">
            <i className="fas fa-angle-double-down" />
            <p>Your Franchise</p>
            <i className="fas fa-angle-double-down" />
          </div>

          <div className="franchiseList">{franchiseList}</div>
        </div>
      </div>
    );
  }
}

export default Option;
