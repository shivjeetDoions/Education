import React from "react";
import { Container } from "react-bootstrap";

function SecSix() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 mt-5">
          Who should take this course?
        </h1>
        <ul className="py-5">
          <li>Anyone who is curious about programming </li>
          <li> Entrepreneurs </li>
          <li>Those looking for a career change </li>
          <li>Serious coders & hobbyists</li>
          <li> Students & teenagers </li>
          <li>Anyone who wants to learn web development</li>
        </ul>
      </Container>
    </div>
  );
}

export default SecSix;
