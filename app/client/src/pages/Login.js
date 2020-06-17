import React from "react";
import { Container } from "react-bootstrap";
import Login from "../components/auth/Login";
import Navigation from "../components/Nav";

const Login = (props) => {
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Login handleSuccessfulAuth={props.handleSuccessfulAuth}/>
        </Container>
      </div>
    );
  }
}

export default Login;
