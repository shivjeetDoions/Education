import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecThreeImg from "../HomeComponents/SecThreeImg";
import SecThreeMH from "../HomeComponents/SecThreeMH";
import SecThreeMsg from "../HomeComponents/SecThreeMsg";

function SecThree() {
  return (
    <div>
      <Container className="py-5 my-sm-0 my-md-5">
        <Row>
          <Col className="py-5">
            <SecThreeMH />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <SecThreeMsg />
          </Col>
          <Col sm={12} md={6} className="d-flex align-items-center">
            <SecThreeImg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecThree;
