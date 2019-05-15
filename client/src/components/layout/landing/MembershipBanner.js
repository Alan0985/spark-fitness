import React from "react";
import { Link } from "react-router-dom";

export default function MembershipBanner() {
  return (
    <section id="membershipBanner">
      <div className="membershipBanner">
        <div className="bannerText">
          <h1>Perfect Membership For You</h1>
          <p>
            Incredible services and amenities that will help you achieve your
            goals.
          </p>
          <Link to="/explore/membership">Franchise</Link>
        </div>
      </div>
    </section>
  );
}
