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

          <ListGroup variant="flush" style={{marginLeft: "150px"}}>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Loan Signing</div>
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Full Purchase</div>
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Reverse Mortgage</div>
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Extra for E-Docs</div>
              <Badge bg="light" text="dark">
                $0
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Loan Application</div>
              <Badge bg="light" text="dark">
                $75
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              disabled
            >
              <div className="ms-2 me-auto">Cash Deal</div>
              <Badge bg="light" text="dark">
                $100
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </blockquote>
      </div>
    </div>
  );
}
export default Fees;
