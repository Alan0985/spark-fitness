import React from "react";
const videoPath = require("../../../video/fitness.mp4");

export default function Video() {
  return (
    <section id="video">
      <div className="videoBG">
        <video autoPlay loop muted>
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
