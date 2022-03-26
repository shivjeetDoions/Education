import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Container } from "react-bootstrap";

function SuccessFrom(props) {
  console.log("SuccessFrom", props);
  const tainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: tainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./Success.json"),
    });
  }, []);

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center">
        <div ref={tainer} style={{ height: "400px", width: "400px" }}></div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="p-2 px-4 me-2 m-3 fw-bold "
          style={{
            background: "#E63732",
            color: "#fff",
            border: "none",
          }}
          onClick={() => {
            props.onHide();
          }}
        >
          Close
        </button>
      </div>
    </Container>
  );
}

export default SuccessFrom;
