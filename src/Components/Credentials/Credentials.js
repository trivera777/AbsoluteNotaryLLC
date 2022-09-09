import React from "react";
import "./credentials.css";
import { Card } from "react-bootstrap";
import certificate from "../../lss.png";
import nsa from "../../nsa.png";

function Credentials() {
  return (
    <div className="credentials" id="credentials">
      <Card>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <h2>credentials.</h2>
            <Card>
              <Card.Img 
              variant="top" 
              className="nsaImg" 
              src={nsa} 
              style={{
                height: "200px",
                width: "200px"
              }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Img
                variant="top"
                className="certificateImg"
                src={certificate}
                style={{
                  height: "200px",
                  width: "280px"
                }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Credentials;
