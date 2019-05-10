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
    </div>
  );
}
