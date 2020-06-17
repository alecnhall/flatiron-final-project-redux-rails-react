import React from "react";
import { Container } from "react-bootstrap";
import UserLogin from "../components/auth/UserLogin";
import Navigation from "../components/Nav";

const Login = (props) => {
  return (
    <div>
      <Navigation />
      <Container>
        <UserLogin />
      </Container>
    </div>
  );
};

export default Login;
