import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import Registration from "../components/auth/Registration";
import Navigation from "../components/Nav";

const Signup = (props) => {
  console.log(props);
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
