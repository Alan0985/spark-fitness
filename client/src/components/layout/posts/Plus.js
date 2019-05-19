import React from "react";

export default props => (
  <div className="postImage plus">
    <div className="plusIcon">+</div>
    <input type="file" id="chooseFile" onChange={props.onChange} multiple />
  </div>
);
