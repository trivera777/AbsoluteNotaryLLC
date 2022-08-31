import React from "react";
import "./credentials.css";
import { Card } from "react-bootstrap";
import certificate from '../../lss.png'


function Credentials() {
  return (
    <div className="credentials" id="credentials">
      <img src={certificate} alt="Loan Signing System Certificate" />
    </div>
  );
}
export default Credentials;
