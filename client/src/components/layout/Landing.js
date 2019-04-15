import React from "react";
import Video from "./Video";
import WhySpark from "./WhySpark";
import Trial from "./Trial";
import MembershipBanner from "./MembershipBanner";
import Footer from "./Footer";

import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <Video />
      <WhySpark />
      <Trial />
      <MembershipBanner />
      <Footer />
    </div>
  );
}
