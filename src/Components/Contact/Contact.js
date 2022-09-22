import React from "react";
import email from "./email.png";
import './contact.css'
import { Divider } from "@mui/material";

function Contact(){
    return (
        <div className="contactContainer" id="contact">
          
      <Divider textAlign="right">CONTACT</Divider>

          <img src={email} className="files" alt="Files" />

        </div>
    )
}
export default Contact;