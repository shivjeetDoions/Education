import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SecOneImg from "./SecOneImg";
import SecOneMH from "./SecOneMH";
import SecOneMsg from "./SecOneMsg";
import ApplyNow from "../../../Button/ApplyNow";
import KnowMore from "../../../Button/KnowMore";
function SecOne() {
  return (
    <div>
      <Container className="py-0 py-md-5 my-0 my-md-5">
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
          <Col xs={{ span: 6, offset: 0 }} sm={{ span: 3, offset: 0 }}>
            <ApplyNow />
          </Col>
          <Col xs={{ span: 6, offset: 0 }} sm={{ span: 3, offset: 0 }}>
            <KnowMore />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecOne;
