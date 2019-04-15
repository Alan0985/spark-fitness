import React from "react";
const videoPath = require("../../video/v01.mp4");

export default function Video() {
  return (
    <section id="video">
      <div className="videoBG">
        <video src={videoPath} autoPlay loop muted />
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
