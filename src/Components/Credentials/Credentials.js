import React from "react";
import "./credentials.css";
import { Card } from "react-bootstrap";
import certificate from "../../lss.png";
import nsa from "../../nsa.png";

function Credentials() {
  return (
    <div className="credentials" id="credentials">
      <Card
        style={{
          backgroundColor: "#EDE8E4",
        }}
      >
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Credentials;
