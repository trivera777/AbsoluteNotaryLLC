import React from "react";
import "./about.css";
// import { Card } from "react-bootstrap";
import { Divider } from "@mui/material";
import files from "./files.png";

function About() {
  return (
    <div className="about" id="about">
      <Divider textAlign="right" className="divider">ABOUT</Divider>
      <br />
      <blockquote className="blockquote mb-0">
        <img src={files} className="files" alt="Files" />
        <p>
          I am a professional and certified NNA Notary Loan Signing Agent. I am
          also certified with the Loan Signing System. I offer 3 years of notary
          service experience as well as 5 years experience working in a
          financial institution. This is why I am your go to signing agent - I
          am very knowledgeable when it comes to loan documents and know how
          crucial it is to make zero mistakes. That is why I never miss a
          signature, date or initials and I always make same day drop offs. I
          will assure the signing process goes smoothly for the client and I can
          confidently give a brief overviews, if needed, without stepping
          outside the scope of my roles as a signing agent. I look forward to
          being your preferred signing agent!
        </p>
      </blockquote>
    </div>
  );
}
export default About;
