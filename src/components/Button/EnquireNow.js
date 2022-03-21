import React from "react";
import { Modal, CloseButton, Container, Row, Col } from "react-bootstrap";
import EnquireForm from "../Form/EnquiryForm";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3" style={{ background: "#E63732" }}>
          <Container>
            <Row className="d-flex justify-content-center align-items-center">
              <Col
                md={11}
                className="d-flex flex-column justify-content-center align-items-center text-white"
              >
                <h1>Enquire now</h1>
              </Col>
              <Col md={1} className=" p-2 fw-bold">
                <CloseButton variant="white" onClick={props.onHide} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="p-3">
          <EnquireForm {...props} />
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function EnquiryNow(...props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="p-2 px-4 fw-bold "
        style={{
          background: "#E63732",
          color: "#fff",
          border: "none",
        }}
        onClick={() => setModalShow(true)}
      >
        Enquire Now
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EnquiryNow;
