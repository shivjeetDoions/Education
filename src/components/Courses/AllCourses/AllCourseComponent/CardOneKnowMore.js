import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
function CardOneKnowMore(props) {
  console.log(props);
  return (
    <div className="d-flex justify-content-end p-3 mb-1">
      <Link
        to="/FullStack"
        onClick={() => {
          props.onHide();
        }}
        style={{ color: "red", textDecoration: "underline" }}
      >
        Know More
      </Link>
    </div>
  );
}

export default CardOneKnowMore;
