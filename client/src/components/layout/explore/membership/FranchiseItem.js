import React from "react";

export default function FranchiseItem(props) {
  return (
    <div className="franchiseItem">
      <p className="franchiseDetail">{props.franchiseValue}</p>
      <i className="far fa-check-circle" />
    </div>
  );
}
