import React from "react";
import { Link } from "react-router-dom";

export default function GrabTrial() {
  return (
    <section id="grabTrial">
      <h1>3 Days Trial</h1>
      <p>It is your right to pop in and have 3 days trial!</p>
      <Link to="/explore/contact">Grab It Now</Link>
    </section>
  );
}
