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
            <ListGroup.Item disabled>
              Loan Signing:
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Full Purchase:{" "}
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Reverse Mortgage:{" "}
              <Badge bg="light" text="dark">
                $150
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Extra for E-Docs:{" "}
              <Badge bg="light" text="dark">
                no fee
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Loan Application:{" "}
              <Badge bg="light" text="dark">
                $75
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item disabled>
              Cash Deal:{" "}
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
