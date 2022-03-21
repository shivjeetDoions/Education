import React from "react";
import { Modal, Container, Col, Row } from "react-bootstrap";
import ApplyFormBeginner from "../Form/ApplyFormBeginner";
import CloseButton from "react-bootstrap/CloseButton";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3 mb-5" style={{ background: "#E63732" }}>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col
                md={11}
                className="d-flex flex-column justify-content-center align-items-center text-white"
              >
                <h2>APPLY FOR</h2>
                <p>Beginner Full Stack Web Development</p>
              </Col>
              <Col md={1} className=" p-2 fw-bold">
                <CloseButton variant="white" onClick={props.onHide} />
              </Col>
            </Row>
          </Container>
        </div>
        <ApplyFormBeginner />
      </Modal.Body>
    </Modal>
  );
}

function ApplyNow() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="p-0">
      <button
        onClick={() => setModalShow(true)}
        className="p-2 px-4 fw-bold "
        style={{
          background: "#E63732",
          color: "#fff",
          border: "none",
        }}
      >
        Apply now
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ApplyNow;
