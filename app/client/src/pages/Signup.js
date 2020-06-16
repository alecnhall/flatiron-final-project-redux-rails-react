import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Nav";

class Signup extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Registration />
        </Container>
      </div>
    );
  }
}

export default Signup;
