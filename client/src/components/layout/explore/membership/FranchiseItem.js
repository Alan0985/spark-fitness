import React from "react";

export const YesFranchiseItem = props => {
  return (
    <div className="franchiseItem yesFranchiseItem">
      <p className="franchiseDetail">{props.franchiseValue}</p>
      <i className="far fa-check-circle" />
    </div>
  );
};

export const NoFranchiseItem = props => {
  return (
    <div className="franchiseItem noFranchiseItem">
      <p className="franchiseDetail">{props.franchiseValue}</p>
      <i className="far fa-times-circle" />
    </div>
  );
};
