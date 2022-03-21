import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecOneImg from "./SecOneImg";
import SecOneMH from "./SecOneMH";
import SecOneMsg from "./SecOneMsg";
import KnowMore from "../../../Button/KnowMore";
import ApplyNowDigital from "../../../Button/ApplyNowDigital";
function SecOne() {
  return (
    <div>
      <Container className="py-5 my-5">
        <Row>
          <Col sm={12} md={6} className="d-flex flex-column align-self-end">
            <SecOneMH />
            <SecOneMsg />
          </Col>
          <Col>
            <SecOneImg />
          </Col>
        </Row>
        <Row className="d-flex align-self-start">
          <Col md={2}>
            <ApplyNowDigital />
          </Col>
          <Col md={2}>
            <KnowMore />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecOne;
