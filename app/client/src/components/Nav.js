import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navigation = ({ loggedInStatus, handleLogout }) => {
  function handleLogoutClick() {
    const url = "http://localhost:3001/logout";
    const options = {
      method: "DELETE",
      withCredentials: true,
    };

    fetch(url, options)
      .then((response) => {
        handleLogout();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Favorites</Navbar.Brand>
        <div className="navigation">
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {loggedInStatus === "LOGGED_IN" && (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            )}
          </Nav>
          {loggedInStatus === "LOGGED_IN" ? (
            <Nav>
              <Nav.Link as={Link} to="/" onClick={handleLogoutClick}>
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Login
              </Nav.Link>
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
