import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Container, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar expand="lg" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="tog"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navigation />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
