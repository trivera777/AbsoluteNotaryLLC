import React from "react";
import email from "./email.png";
import "./contact.css";
import { Divider } from "@mui/material";

function Contact() {
  return (
    <div className="contact" id="contact">
      <Divider textAlign="middle">CONTACT</Divider>
        <div className="contactContainer">

      <img src={email} className="files" alt="Files" />
        </div>
    </div>
  );
}
export default Contact;
