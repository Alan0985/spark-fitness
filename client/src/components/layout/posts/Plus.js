import React from "react";

export default props => (
  <div className="plus">
    <label htmlFor="multi">+</label>
    <input type="file" id="multi" onChange={props.onChange} multiple />
  </div>
);
