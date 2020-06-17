import React from "react";
import { Container } from "react-bootstrap";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Nav";

const Signup = (props) => {
  return (
    <div>
      <Navigation />
      <Container>
        <Registration handleSuccessfulAuth={props.handleSuccessfulAuth} />
      </Container>
    </div>
  );
};

export default Signup;
