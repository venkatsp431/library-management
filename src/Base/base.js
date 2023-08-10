import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Base({ children }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Library Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
      <div>{children}</div>
    </div>
  );
}
