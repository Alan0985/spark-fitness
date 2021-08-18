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
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10598.757388278385!2d174.7714502903268!3d-41.336528110394234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38bab322b547b5%3A0x3626c77e9eeb2d3b!2sThe%20Parade%2C%20Island%20Bay%2C%20Wellington%206023!5e0!3m2!1sen!2snz!4v1629268170500!5m2!1sen!2snz"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
