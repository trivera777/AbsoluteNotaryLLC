import React from "react";
import "./credentials.css";
import { Card, Figure } from "react-bootstrap";
import certificate from "./lss.png";
import nsa from "./nsa.png";
import nsabc from "./nsabc.png";
import badge from "./badge.png";

function Credentials() {
  return (
    <div className="credentials" id="credentials">
      <h2>credentials.</h2>
      <Figure className="credentialsContainer">
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={nsabc}
      />
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={nsa}
      />
      <Figure.Image
        width={250}
        height={180}
        alt="171x180"
        src={certificate}
      />
    </Figure>

      {/* <img
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
      /> */}
    </div>
  );
}
export default Credentials;
