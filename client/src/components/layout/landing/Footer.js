import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="connect">
        <div className="address">
          <p>P: +64 21 1234567</p>
          <p>E: info@sparkfitness.co.nz</p>
          <p>City Center, Christchurch, New Zealand</p>
        </div>
        <div className="socialMedia">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-pinterest-p" />
        </div>
      </div>
      <div className="copyRight">
        Copyright &copy; Spark Fitness; Powered By
        <a href="https://github.com/Alan0985"> Allen Wang</a>
      </div>
    </footer>
  );
}
