import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { Divider } from "@mui/material";

import invoice from "./invoice.png";
import "./fees.css";

function Fees() {
  return (
    <div className="fees" id="fees">
      <Divider textAlign="left">FEES</Divider>
      <br />
      <div className="container">
        <blockquote className="blockquote mb-0">
          <img src={invoice} className="files" alt="Files" />

          <ListGroup variant="flush">
            <ListGroup.Item>
              <Badge bg="light" text="dark">
                Light
              </Badge>
              Loan Signing: $150
            </ListGroup.Item>
            <ListGroup.Item>Full Purchase: $150</ListGroup.Item>
            <ListGroup.Item>Reverse Mortgage: $150</ListGroup.Item>
            <ListGroup.Item>Extra for E-Docs: $0</ListGroup.Item>
            <ListGroup.Item>Loan Application: $75</ListGroup.Item>
            <ListGroup.Item>Cash Deal: $100</ListGroup.Item>
          </ListGroup>
        </blockquote>
      </div>
    </div>
  );
}
export default Fees;
