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

            {props.loggedIn && (
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            )}
          </Nav>
          {props.loggedIn ? (
            <Nav>
              <Nav.Link as={Link} to="/" onClick={props.handleLogout}>
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return { handleLogout: () => dispatch(handleLogout()) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
