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
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d46283.65858229785!2d172.6294973!3d-43.5288507!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1684802176718!5m2!1sen!2snz"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
