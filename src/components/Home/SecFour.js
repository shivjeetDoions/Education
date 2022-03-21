import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecFourImg from "../HomeComponents/SecFourImg";
import SecFourMH from "../HomeComponents/SecFourMH";
import SecFourMsg from "../HomeComponents/SecFourMsg";
function SecFour() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="py-5 my-5">
            <SecFourMH />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <SecFourImg />
          </Col>
          <Col sm={12} md={6}>
            <SecFourMsg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecFour;
