import React from "react";

export default props =>
  props.images.map((image, i) => (
    <div key={i} className="newPostImage">
      <img src={image.secure_url} alt="" />
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="removeImage"
      >
        X
      </div>
    </div>
  ));
