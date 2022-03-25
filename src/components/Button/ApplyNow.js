import React from "react";
import { Modal, Container, Row } from "react-bootstrap";
import ApplyFormBeginner from "../Form/ApplyFormBeginner";
import CloseButton from "react-bootstrap/CloseButton";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="animatemodalEnquire"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="p-0">
        <div className=" p-3 mb-5" style={{ background: "#E63732" }}>
          <Container>
            <div className="d-flex justify-content-center  align-items-center  text-center">
              <div className="text-white col-11">
                <h2 className="text-nowrap  ">APPLY FOR</h2>
              </div>
              <div className="col=1 p-2 fw-bold">
                <CloseButton variant="white" onClick={props.onHide} />
              </div>
            </div>
            <Row>
              <div className="d-flex justify-content-center align-items-center text-center text-white ">
                <p>Beginner Full Stack Web Development</p>
              </div>
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
        className="p-3 m-2 px-3 px-md-4 fw-bold Custombutton"
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
