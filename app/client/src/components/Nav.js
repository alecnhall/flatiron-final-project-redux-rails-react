import React from "react";
import { Navbar } from "react-bootstrap";
import Search from "./Search";

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      {/* <Search /> */}
    </Navbar>
  );
};

export default Nav;
