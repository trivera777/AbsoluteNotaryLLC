import React from "react";
import email from "./email.png";
import "./contact.css";
import { Divider } from "@mui/material";
import { LocalPhone, Email } from "@mui/icons-material";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Divider textAlign="left" className="divider">
        CONTACT
      </Divider>
      <div className="contactContainer">
        <img src={email} className="files" alt="Files" />
        <ul>
          <LocalPhone /> 970-515-8586
          <br />
          <Email /> trivera@absolutenotaryco.com
        </ul>
      </div>
    </div>
  );
}
export default Contact;
