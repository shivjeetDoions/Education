import React from "react";
import { Container } from "react-bootstrap";

function SecSix() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 mt-5">
          Who this course is for
        </h1>
        <ul>
          <li>
            This course is for beginners - no prior experience is required{" "}
          </li>
          <li>This course is for entrepreneurs & hobbyists </li>
          <li>This course is for those looking for a career change</li>
          <li>
            This course is for students, artists, content creators and
            celebrities.
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default SecSix;
