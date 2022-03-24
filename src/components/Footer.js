import React from "react";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <>
      <div className="d-flex justify-content-end fixed-bottom">
        <div className="CollNow d-flex justify-content-center  align-items-center  ">
          <a href="tel://932972268" className="h2 text-white">
            call
            <br />
            now
          </a>
        </div>
      </div>
      <Container fluid className="ftr p-5 mt-5">
        <Row className="d-flex justify-content-center  align-items-center ">
          <Col className="d-flex justify-content-center  align-items-center ms-0 ms-md-5 ps-0 ps-md-5">
            <div>
              <h1>Contact Detail</h1>
              <p>www.doions.com</p>
              <p>info@doions.com</p>
              <p>932972268/0761-3500430</p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center  align-items-center p-sm-0">
            <div>
              <h1>Address</h1>
              <p>
                3rd Floor, Raina Tower, South <br /> Civil Lines, Jabalpur,
                Madhya
                <br />
                Pradesh 482001
              </p>
            </div>
          </Col>
          <Col
            sm={4}
            className="d-flex justify-content-center  align-items-center me-0 me-md-5 pe-0 pe-md-5 "
          >
            <div>
              <a
                href="https://www.facebook.com/doionsengineering"
                target="blank"
              >
                <AiFillFacebook size={70} />
              </a>
              <a
                href="https://www.instagram.com/doions_education/"
                target="blank"
              >
                <AiFillInstagram size={70} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
