import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecFiveImg from "../HomeComponents/SecFiveImg";
import SecFiveMH from "../HomeComponents/SecFiveMH";
import SecFiveMsg from "../HomeComponents/SecFiveMsg";

function SecFive() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <SecFiveMH />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <SecFiveMsg />
          </Col>
          <Col sm={12} md={6}>
            <SecFiveImg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecFive;
