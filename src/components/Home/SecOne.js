import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EnquireNow from "../Button/EnquireNow";
import KnowMore from "../Button/KnowMore";
import SecOneHM from "../HomeComponents/SecOneHM";
import SecOneImg from "../HomeComponents/SecOneImg";
import SecOneMsg from "../HomeComponents/SecOneMsg";
function SecOne() {
  return (
    <div>
      <Container className="py-0 py-md-5 my-0 my-md-5">
        <Row>
          <Col sm={12} md={6} className="d-flex flex-column align-self-end">
            <SecOneHM />
            <SecOneMsg />
          </Col>
          <Col sm={12} md={6}>
            <SecOneImg />
          </Col>
        </Row>
        <Row className="d-flex align-self-start">
          <Col md={3}>
            <EnquireNow />
          </Col>
          <Col md={3}>
            <KnowMore />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecOne;
