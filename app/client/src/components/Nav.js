import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { handleLogout } from "../redux/actions/index";
import { Link } from "react-router-dom";

const Navigation = (props) => {
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
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

function mapDispatchToProps(dispatch) {
  return { handleLogout: () => dispatch(handleLogout) };
}

export default connect(null, mapDispatchToProps)(Navigation);
