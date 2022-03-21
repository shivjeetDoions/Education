import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ColanderImg from "./SecTwoImg/ColanderImg";
import OfflineImg from "./SecTwoImg/OfflineImg";
import RupayImg from "./SecTwoImg/RupayImg";
import TimeImg from "./SecTwoImg/TimeImg";

function SecTwo() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 mt-5">
          Course Details
        </h1>
        <Row className="d-flex justify-content-start align-items-center">
          <Col>
            <TimeImg />
            <p>Awailable </p>
            <p>in shifts</p>
          </Col>
          <Col>
            <RupayImg />
            <p>
              5900/- <br />
              (taxes applicable)
            </p>
          </Col>
          <Col>
            <OfflineImg />
            <p>Mode</p>
          </Col>
          <Col>
            <ColanderImg />
            <p>30 day - 25 Hours</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="py-5">
              Course Code: <span className="fw-bold">DIGMA01</span>
            </p>
            <p>
              The course is designed keeping in mind for those who are complete
              beginner for digital marketing. You can be either a student or a
              career seeker or an entrepreneur planning to start an e-venture.
            </p>
            <p>
              The course will start with absolute basic of digital marketing,
              promotions and takes you till the advance concept like search
              engine optimization.
            </p>
            <p>
              This is a very good starting point, if you wish to become a
              digital marketer and learn the fundamental of online promotions.
            </p>
            <p>
              In this course you will learn various techniques of building web
              presence, content strategies, how search engine works, how social
              media marketing works. The course will also help you understand
              the concept of SEO and SMO from the concept to real world
              application. You will also experience a new way of learning where
              you apply the concepts as soon as you learn them in a real world
              project.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SecTwo;
