import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

import "./Header.css";

const Header = (props) => {
  return (
    <Navbar className="navigation" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Data Visualization Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              type="button"
              className="forgot_pass d-flex justify-content-start"
              href="/data_tables"
            >
              Data Tables
            </Nav.Link>
            <Nav.Link
              type="button"
              href="/geo_location"
              className="forgot_pass d-flex justify-content-start"
            >
              Locations
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
