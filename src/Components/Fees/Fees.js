import React from "react";
// import { Card, Figure } from "react-bootstrap";
import invoice from "./invoice.png";
import './fees.css'

function Fees(){
    return (
        <div className="fees" id="fees">
        <blockquote className="blockquote mb-0">
          <h2>fees.</h2>
          <img src={invoice} className="files" alt="Files" />
          <ul>
              <li>Loan Signing: $150</li>
              <li>Full Purchase: $150</li>
              <li>Reverse Mortgage: $150</li>
              <li>Extra for E-Docs: $0</li>
              <li>Loan Application: $75</li>
              <li>Cash Deal: $100</li>
              
          </ul>
        </blockquote>
    </div>
    )
}
export default Fees;