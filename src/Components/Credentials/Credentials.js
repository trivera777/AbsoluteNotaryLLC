import React from "react";
import "./credentials.css";
import { Card } from "react-bootstrap";
import certificate from "../../lss.png";
import nsa from "../../nsa.png";

function Credentials() {
  return (
    <div className="credentials" id="credentials">
        credentials
      {/* <Card>
        <Card.Header>Credentials</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              <img src={certificate} alt="Loan Signing System Certificate" />
              <img src={nsa} alt="Loan Signing System Certificate" />
            </p>
          </blockquote>
        </Card.Body>
      </Card> */}
    </div>
  );
}
export default Credentials;
