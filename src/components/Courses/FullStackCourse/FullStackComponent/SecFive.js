import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SecFive() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center text-center fw-bold py-5 mt-5">
          Technologies that will get covered in <br /> this course
        </h1>
        <Row>
          <Col>
            <ul>
              <li>HTML5</li>
              <li> CSS3</li>
              <li>Javascript</li>
              <li> Bootstrap 4</li>
              <li>DOM Manipulation</li>
              <li>NPM</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Node</li>
              <li> MongoDB</li>
              <li>REST</li>
              <li>Express</li>
              <li>ES6</li>
              <li>React</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecFive;
