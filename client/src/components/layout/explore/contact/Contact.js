import React from "react";

import CallTrial from "./CallTrial";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <CallTrial />
      <div className="infoAndForm">
        <ContactInfo />
        <ContactForm />
      </div>
      <div className="googleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.6671147398383!2d174.92064431530278!3d-36.9700063940056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4cde9735317f%3A0x4c2ae54d78940460!2sRohi+Pl%2C+Flat+Bush%2C+Auckland+2016!5e0!3m2!1sen!2snz!4v1557533690199!5m2!1sen!2snz"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
