import React from "react";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container fluid className="ftr p-5 mt-5">
      <Row>
        <Col>
          <h1>Contact Detail</h1>
          <p>www.doions.com</p>
          <p>932972268</p>
          <p>0761-3500430</p>
        </Col>
        <Col>
          <h1>Address</h1>
          <p>
            1st Floor, Raina Tower, South Civil Lines, Jabalpur, Madhya Pradesh
            482001
          </p>
        </Col>
        <Col className="d-flex align-items-center  justify-content-center">
          <a href="https://www.facebook.com/doionsengineering" target="blank">
            <AiFillFacebook size={70} />
          </a>
          <a href="https://www.instagram.com/doions_education/" target="blank">
            <AiFillInstagram size={70} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
