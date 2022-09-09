import React from "react";
import "./credentials.css";
import { Card } from "react-bootstrap";
import certificate from "./lss.png";
import nsa from "./nsa.png";
import nsabc from "./nsabc.png";

function Credentials() {
  return (
    <div className="credentials" id="credentials">
      <img
        src={nsa}
        alt="NNA Certificate"
        style={{
          height: "200px",
          width: "200px",
        }}
      />
      <img
        src={nsabc}
        alt="NNA Certificate"
        style={{
          height: "200px",
          width: "200px",
        }}
      />
      <img
        src={certificate}
        alt="NNA Certificate"
        style={{
          height: "200px",
          width: "280px",
        }}
      />
    </div>
  );
}
export default Credentials;
