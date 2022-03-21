import React from "react";
import { Nav } from "react-bootstrap";
import CoursesFullScreen from "./Courses/AllCourses/CoursesFullScreen";

function Navigation() {
  return (
    <>
      <Nav className="ms-auto">
        <CoursesFullScreen />
        {/* <Link to="/Blog" className="mx-5 nav-link text-dark navStyle">
          Blog
        </Link> */}
        <a
          href=" https://doionseducation.myty.in/"
          className="mx-5 p-2 navStyle"
        >
          Blog
        </a>
        <a href="#ContactUs" className="mx-5 p-2 navStyle">
          ContactUs
        </a>
      </Nav>
    </>
  );
}

export default Navigation;
