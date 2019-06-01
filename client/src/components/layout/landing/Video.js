import React from "react";
const videoPath = require("../../../video/fitness.mp4");
const posterPath = require("../../../img/768/me_768.jpg");

export default function Video() {
  return (
    <section id="video">
      <div className="videoBG">
        <video loop muted poster={posterPath}>
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
      <div className="videoOverlay" />
      <div className="videoText">
        <i className="fab fa-gripfire" />
        <h1>Spark</h1>
        <h1>Fitness</h1>
        <p>Your health is an investment, not an expense!</p>
      </div>
    </section>
  );
}
