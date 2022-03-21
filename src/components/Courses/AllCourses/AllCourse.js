import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

function AllCourse(props) {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center py-5 mb-5 fw-bold">
          Courses
        </h1>
        <Row className="d-flex justify-content-around">
          <Col md={4}>
            <CardOne {...props} />
          </Col>
          <Col md={4}>
            <CardTwo {...props} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AllCourse;
