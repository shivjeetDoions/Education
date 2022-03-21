import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactFrom from "../Form/ContactForm";
import ContactMH from "./ContactMH";

function index() {
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col className="d-flex justify-content-center py-5 my-5">
            <ContactMH />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={8}>
            <ContactFrom />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
