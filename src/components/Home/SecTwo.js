import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecTwoImg from "../HomeComponents/SecTwoImg";
import SecTwoMH from "../HomeComponents/SecTwoMH";
import SecTwoMsg from "../HomeComponents/SecTwoMsg";
function SecTwo() {
  return (
    <div>
      <Container className="py-0 py-md-5 my-0 my-md-5">
        <Row>
          <Col sm={12} md={6}>
            <SecTwoImg />
          </Col>
          <Col sm={12} md={6} className="d-flex flex-column align-self-center">
            <SecTwoMH />
            <SecTwoMsg />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecTwo;
