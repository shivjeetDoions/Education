import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto">
        <Link to="/Courses" className="mx-5 nav-link text-dark navStyle">
          Courses
        </Link>
        <a
          href=" https://doionseducation.myty.in/"
          className="mx-5 p-2 navStyle"
        >
          Blog
        </a>
        <a href="#ContactUs" className="mx-5 p-2 navStyle">
          Contact Us
        </a>
      </Nav>
    </>
  );
}

export default Navigation;
